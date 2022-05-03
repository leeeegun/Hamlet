package com.hamlet.api.service;

import com.hamlet.api.request.QuestionOrdersReq;
import com.hamlet.api.request.QuestionPostReq;
import com.hamlet.api.request.QuestionPutReq;
import com.hamlet.db.entity.Hamlet;
import com.hamlet.db.entity.Question;
import com.hamlet.db.repository.HamletRepository;
import com.hamlet.db.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("QuestionService")
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    HamletRepository hamletRepository;

    @Override
    public void createQuestion(QuestionPostReq res) {

        Hamlet hamlet = hamletRepository.findById(res.getHamletId()).get();

        Question question = new Question(res, hamlet);

        if(questionRepository.countByHamletId(hamlet.getId()) == 0L) {
            question.setOrders(1L);
        }else {
            Long orders = questionRepository.countByHamletId(hamlet.getId());
            question.setOrders(orders+1L);
        }

        questionRepository.save(question);
    }

    @Override
    public void modifyQuestion(Long questionId, QuestionPutReq res) {
        Question modifyQuestion = questionRepository.findById(questionId).get();

        modifyQuestion.setKinds(res.getKinds());
        modifyQuestion.setPoints(res.getPoint());
        modifyQuestion.setTime(res.getTime());
        modifyQuestion.setMultiple(res.getMultiple());
        modifyQuestion.setContents(res.getContents());

        questionRepository.save(modifyQuestion);
    }

    @Override
    public void modifyOrders(QuestionOrdersReq questionOrdersReq) {
        List<Question> questions = questionRepository.findAllByHamletId(questionOrdersReq.getHamletId());

        Question modifyQuestion = questionRepository.findById(questionOrdersReq.getQuestionId()).get();

        for(Question question : questions) {
            if(question.getOrders() <= modifyQuestion.getOrders()) {
                question.setOrders(question.getOrders()+1L);
            }
            questionRepository.save(question);
        }
        modifyQuestion.setOrders(questionOrdersReq.getOrders());

        questionRepository.save(modifyQuestion);
    }

    @Override
    public List<Question> findAllQuestion(Long hamletId) {
        List<Question> questions = questionRepository.findAllByHamletId(hamletId);

        return questions;
    }

    @Override
    public Question findQuestion(Long hamletId, Long questionId) {
        Question question = questionRepository.findById(questionId).get();

        return question;
    }

    @Override
    public void deleteQuestion(Long questionId) {
        Long hamletId = questionRepository.findById(questionId).get().getHamlet().getId();

        // 해당 햄릿에 존재하는 질문들
        List<Question> questions = questionRepository.findAllByHamletId(hamletId);

        // 삭제할 질문
        Question deleteQuestion = questionRepository.findById(questionId).get();

        for(Question question : questions) {
            //삭제하려는 질문 순서보다 현재 질문 순서가 느리면 순서를 앞으로 당긴다.
            if(question.getOrders() > deleteQuestion.getOrders()) {
                question.setOrders(question.getOrders()-1L);
            }
            questionRepository.save(question);
        }

        questionRepository.deleteById(questionId);
    }
}
