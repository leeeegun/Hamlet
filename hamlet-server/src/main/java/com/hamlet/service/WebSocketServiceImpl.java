package com.hamlet.service;

import com.hamlet.model.CodeResponse;
import com.hamlet.model.Message;
import com.hamlet.model.MessageType;
import com.hamlet.util.RedisUtil;
import org.apache.commons.lang3.RandomStringUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Set;

@Service
public class WebSocketServiceImpl implements WebSocketService {

    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    private SimpMessagingTemplate template;

    @Override
    public void joinManager(String code, Message message, SimpMessageHeaderAccessor headerAccessor) {
        headerAccessor.getSessionAttributes().put("code", code);
        headerAccessor.getSessionAttributes().put("manager", "true");

        template.convertAndSend("/room/" + code, message);

        redisUtil.setData("MANAGER" + code, "exist");
    }

    @Override
    public void exitManager(String code, Message message, SimpMessageHeaderAccessor headerAccessor) {
        message.setType(MessageType.LEAVE);
        message.setContent("manager disconnecting");
        headerAccessor.getSessionAttributes().remove("manager");

        template.convertAndSend("/room/" + code, message);
    }

    @Override
    public void joinUser(String code, Message message, SimpMessageHeaderAccessor headerAccessor) {
        headerAccessor.getSessionAttributes().put("code", code);
        headerAccessor.getSessionAttributes().put("nickname", message.getSender());

        message.setContent("join success");

        template.convertAndSend("/room/" + code, message);

        redisUtil.addZdata("USER_LIST" + code, message.getSender(), 0.0);
    }

    @Override
    public void exitUser(String code, Message message) {
        template.convertAndSend("/room/" + code, message);
    }

    @Override
    public void setting(String code, Message message) {
        /*
            list = [ [질문종류, 점수, 시간, 질문내용, [ [옵션] ] ] ]
            questions = [질문종류, 점수, 시간, 질문내용, [ [옵션] ] ]
            kind = 질문종류
            point = 점수
            time = 시간
            question = 질문내용
            options = [ [내용, 정답여부] ]
            option =  [내용, 정답여부]
            content = 내용
            answer = 정답여부
         */
        ArrayList list = (ArrayList) message.getContent();
        for(int i = 0; i < list.size(); i++) {
            ArrayList questions = (ArrayList) list.get(i);
            String kind = (String) questions.get(0);
            String point = (String) questions.get(1);
            String time = (String) questions.get(2);
            String question = (String) questions.get(3);
            ArrayList options = (ArrayList) questions.get(4);

            redisUtil.setHdata("/QUESTION_KIND/" + code, Integer.toString(i+1), kind);
            redisUtil.setHdata("/QUESTION_POINT/" + code, Integer.toString(i+1), point);
            redisUtil.setHdata("/QUESTION_TIME/" + code, Integer.toString(i+1), time);
            redisUtil.setHdata("/QUESTION_CONTENT/" + code, Integer.toString(i+1), question);
            redisUtil.setHdata("/OPTION_CNT/" + code, Integer.toString(i+1), Integer.toString(options.size()));
            for(int j = 0; j < options.size(); j++) {
                ArrayList option = (ArrayList) options.get(j);
                String content = (String) option.get(0);
                String answer = (String) option.get(1);
                if(Boolean.parseBoolean(answer)) {
                    redisUtil.setHdata("/ANSWER_LIST/" + code, Integer.toString(i+1), content);
                }

                redisUtil.setHdata("/OPTION_CONTENT/" + code + "/QUESTION/" + (i+1), Integer.toString(j+1), content);
                redisUtil.setHdata("/OPTION_ANSWER/" + code + "/QUESTION/" + (i+1), Integer.toString(j+1), answer);
            }
        }
    }

    @Override
    public void start(String code, Message message) {
        String orders = message.getQuizNum();

        JSONObject list = new JSONObject();
        String kind = (String) redisUtil.getHdata("/QUESTION_KIND/" + code, orders);
        String point = (String) redisUtil.getHdata("/QUESTION_POINT/" + code, orders);
        String time = (String) redisUtil.getHdata("/QUESTION_TIME/" + code, orders);
        String question = (String) redisUtil.getHdata("/QUESTION_CONTENT/" + code, orders);

        list.put("kind", kind);
        list.put("point", point);
        list.put("time", time);
        list.put("question", question);

        Integer option_size = Integer.parseInt((String) redisUtil.getHdata("/OPTION_CNT/" + code, orders));

        JSONArray options = new JSONArray();
        for(int i = 0; i < option_size; i++) {
            JSONObject option = new JSONObject();
            String content = (String) redisUtil.getHdata("/OPTION_CONTENT/" + code + "/QUESTION/" + orders, Integer.toString(i+1));
            String answer = (String) redisUtil.getHdata("/OPTION_ANSWER/" + code + "/QUESTION/" + orders, Integer.toString(i+1));

            option.put("content", content);
            option.put("answer", answer);

            options.add(option);
        }
        list.put("options", options);

        redisUtil.setData("/TIME/" + code, Long.toString(System.currentTimeMillis()));

        Message newMessage = new Message();
        if(kind == Integer.toString(1)) {
            newMessage.setType(MessageType.CATEGORY_MULTIPLE);
        }else if(kind == Integer.toString(2)) {
            newMessage.setType(MessageType.CATEGORY_ANSWER);
        }else if(kind == Integer.toString(3)) {
            newMessage.setType(MessageType.CATEGORY_VOTE);
        }else if(kind == Integer.toString(4)) {
            newMessage.setType(MessageType.CATEGORY_SURVEY);
        }
        newMessage.setContent(list);
        newMessage.setQuizNum(orders);

        template.convertAndSend("/room/" + code, newMessage);
    }

    @Override
    public void finish(String code, Message message) {
        template.convertAndSend("/room/" + code, message);
    }

    @Override
    public void ranking(String code, Message message) {
        message.setContent(redisUtil.getRanking("/RANKING/" + code + "/QUESTION" + message.getQuizNum(), 0, 2));
        template.convertAndSend("/room/" + code, message);
    }

    @Override
    public void next(String code, Message message) {
        message.setQuizNum(Integer.toString(Integer.parseInt(message.getQuizNum()) + 1));
        template.convertAndSend("/room/" + code, message);
    }

    @Override
    public void end(String code, Message message) {
        message.setContent(viewRanking("/USER_LIST/" + code, 0, 2));
        template.convertAndSend("/room/" + code, message);
    }

    @Override
    public void sendMessage(String code, Message message) {
        String answer = (String) message.getContent();

        Object temp = message.getContent();
        if(message.getType().equals(MessageType.MULTIPLE) || message.getType().equals(MessageType.ANSWER)) {
            Boolean isFlag = grade("/ANSWER_LIST/" + code, message.getQuizNum(), answer);
            if(isFlag) {
                Long time = (System.currentTimeMillis() - Long.parseLong(redisUtil.getData("/TIME/" + code)))/1000;
                Long question_time = Long.parseLong((String) redisUtil.getHdata("/QUESTION_TIME/" + code, message.getQuizNum()));
                Double score = Double.parseDouble((String) redisUtil.getHdata("/QUESTION_POINT/" + code, message.getQuizNum()));
                Double plusScore = score / (question_time - time);
                Double totalScore = plusScore("/USER_LIST/" + code, message.getSender(), plusScore);

                redisUtil.addZdata("/RANKING/" + code + "/QUESTION/" + message.getQuizNum(), message.getSender(), plusScore);

                JSONObject jsonObject = new JSONObject();
                jsonObject.put("answer", true);
                jsonObject.put("plusScore", plusScore);
                jsonObject.put("totalScore", totalScore);

                message.setContent(jsonObject);
                template.convertAndSend("/room/" + code + "/nickname/" + message.getSender(), message);

                message.setContent(temp);
                template.convertAndSend("/room/" + code, message);
            }

        }else if(message.getType().equals(MessageType.VOTE)) {
            template.convertAndSend("/room/" + code, message);

        }else if(message.getType().equals(MessageType.SURVEY)) {
            template.convertAndSend("/room/" + code, message);

        }
    }

    @Override
    public CodeResponse makeCode() {
        String code = "";
        Boolean isFlag = true;
        while(isFlag) {
            String tempCode = RandomStringUtils.randomNumeric(5);
            if(tempCode.startsWith("0")) {
                continue;
            }

            if(redisUtil.getData(tempCode) == null) {
                isFlag = false;
            }
        }

        redisUtil.setData(code, "exist");

        CodeResponse result = new CodeResponse();
        result.status = true;
        result.data = "Code create success";
        result.object = code;

        return result;
    }

    @Override
    public CodeResponse findCode(String code) {
        CodeResponse result = new CodeResponse();

        if(code == null) {
            result.status = false;
            result.data = "Code find fail";
            return result;
        }

        String exist = redisUtil.getData(code);
        if (exist == null) {
            result.status = false;
            result.data = "Code find fail";
            return result;
        }

        result.status = true;
        result.data = "PIN find success";
        return result;
    }

    public Set<ZSetOperations.TypedTuple<String>> viewRanking(String key, long startIndex, long endIndex) {
        if (key == null) {
            return null;
        }

        return redisUtil.getRanking(key, startIndex, endIndex);
    }

    public double plusScore(String key, String nickname, double score) {
        if (key == null || nickname == null) {
            return -1.0;
        }

        return redisUtil.plusScore(key, nickname, score);
    }

    public double getScore(String key, Object nickname) {
        if (key == null || nickname == null) {
            return 0.0;
        }

        Object score = redisUtil.getScore(key, nickname);
        if (score == null) {
            return 0.0;
        }

        return (double) score;
    }

    public boolean grade(String key, String quizNum, String answer) {
        if (key == null || quizNum == null) {
            return false;
        }

        String rightAnswer = (String) redisUtil.getHdata(key, quizNum);
        if (answer.toUpperCase().equals(rightAnswer.toUpperCase())) {
            return true;
        }

        return false;
    }
}
