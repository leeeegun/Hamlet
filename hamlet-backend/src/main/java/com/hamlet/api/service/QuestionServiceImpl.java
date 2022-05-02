package com.hamlet.api.service;

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
        Question question = new Question();

        Hamlet hamlet = hamletRepository.findById(res.getHamletId()).get();

        question.setHamlet(hamlet);
        question.setKinds(res.getKinds());
        question.setPoints(res.getPoint());
        question.setTime(res.getTime());
        question.setOrders(res.getOrders());
        question.setMultiple(res.getMultiple());
        question.setContents(res.getContents());

        questionRepository.save(question);
    }

    @Override
    public void modifyQuestion(Long questionId, QuestionPutReq res) {
        Question question = questionRepository.findById(questionId).get();

        question.setKinds(res.getKinds());
        question.setPoints(res.getPoint());
        question.setTime(res.getTime());
        question.setOrders(res.getOrders());
        question.setMultiple(res.getMultiple());
        question.setContents(res.getContents());

        questionRepository.save(question);
    }

    @Override
    public List<Question> findAllQuestion(Long hamletId) {
        List<Question> questions = questionRepository.findAllByHamlet(hamletId);

        return questions;
    }

    @Override
    public Question findQuestion(Long hamletId, Long questionId) {
        Question question = questionRepository.findById(questionId).get();

        return question;
    }

    @Override
    public void deleteQuestion(Long questionId) {
        questionRepository.deleteById(questionId);
    }
}
