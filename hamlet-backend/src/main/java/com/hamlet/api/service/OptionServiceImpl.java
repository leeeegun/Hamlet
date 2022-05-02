package com.hamlet.api.service;

import com.hamlet.api.request.OptionPostReq;
import com.hamlet.api.request.OptionPutReq;
import com.hamlet.db.entity.Option;
import com.hamlet.db.entity.Question;
import com.hamlet.db.repository.OptionRepository;
import com.hamlet.db.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("OptionService")
public class OptionServiceImpl implements OptionService {

    @Autowired
    OptionRepository optionRepository;

    @Autowired
    QuestionRepository questionRepository;

    @Override
    public void createOption(OptionPostReq res) {
        Option option = new Option();

        Question question = questionRepository.findById(res.getQuestionId()).get();

        option.setQuestion(question);
        option.setContents(res.getContents());
        option.setAnswer(res.getAnswer());

        optionRepository.save(option);
    }

    @Override
    public void modifyOption(Long optionId, OptionPutReq res) {
        Option option = optionRepository.findById(optionId).get();

        option.setContents(res.getContents());
        option.setAnswer(res.getAnswer());

        optionRepository.save(option);
    }

    @Override
    public List<Option> findAllOption(Long questionId) {
        List<Option> options = optionRepository.findAllByQuestion(questionId);

        return options;
    }

    @Override
    public Option findOption(Long questionId, Long optionId) {
        Option option = optionRepository.findById(optionId).get();

        return option;
    }

    @Override
    public void deleteOption(Long optionId) {
        optionRepository.deleteById(optionId);
    }
}
