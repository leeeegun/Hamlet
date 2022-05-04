package com.hamlet.api.service;

import com.hamlet.api.request.AnswerPostReq;
import com.hamlet.db.entity.Answer;
import com.hamlet.db.entity.LogOption;
import com.hamlet.db.entity.LogQuestion;
import com.hamlet.db.repository.AnswerRepository;
import com.hamlet.db.repository.LogOptionRepository;
import com.hamlet.db.repository.LogQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("AnswerService")
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    AnswerRepository answerRepository;

    @Autowired
    LogQuestionRepository logQuestionRepository;

    @Autowired
    LogOptionRepository logOptionRepository;

    @Override
    public void createAnswer(AnswerPostReq answerPostReq) {
        LogQuestion logQuestion = logQuestionRepository.findByLogQuestionId(answerPostReq.getLogQuestionId());
        LogOption logOption = logOptionRepository.findByLogOptionId(answerPostReq.getLogOptionId());

        Answer answer = new Answer(logQuestion, logOption, answerPostReq);

        answerRepository.save(answer);
    }
}
