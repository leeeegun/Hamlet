package com.hamlet.api.service;

import com.hamlet.api.request.QuestionOrdersReq;
import com.hamlet.api.request.QuestionPostReq;
import com.hamlet.api.request.QuestionPutReq;
import com.hamlet.db.entity.Question;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("QuestionService")
public interface QuestionService {
    void createQuestion(QuestionPostReq res);
    void modifyQuestion(Long questionId, QuestionPutReq res);
    List<Question> findAllQuestion(Long hamletId);
    Question findQuestion(Long hamletId, Long questionId);
    void deleteQuestion(Long questionId);
    void modifyOrders(QuestionOrdersReq questionOrdersReq);
}
