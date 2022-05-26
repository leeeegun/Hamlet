package com.hamlet.api.service;

import com.hamlet.api.request.OptionPostReq;
import com.hamlet.api.request.OptionPutReq;
import com.hamlet.db.entity.Option;
import org.springframework.stereotype.Service;

import java.util.List;


public interface OptionService {
    void createOption(OptionPostReq res);
    void modifyOption(Long optionId, OptionPutReq res);
    List<Option> findAllOption(Long questionId);
    Option findOption(Long questionId, Long optionId);
    void deleteOption(Long optionId);
}
