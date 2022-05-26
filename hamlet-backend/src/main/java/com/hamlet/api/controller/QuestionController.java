package com.hamlet.api.controller;

import com.hamlet.api.request.QuestionOrdersReq;
import com.hamlet.api.request.QuestionPostReq;
import com.hamlet.api.request.QuestionPutReq;
import com.hamlet.api.response.BaseResponseBody;
import com.hamlet.api.response.QuestionInfoRes;
import com.hamlet.api.service.QuestionService;
import com.hamlet.db.entity.Question;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "질문 API", tags = {"Question"})
@RestController
@RequestMapping("/questions")
@CrossOrigin(origins = "*")
public class QuestionController {

    @Autowired
    QuestionService questionService;

    @PostMapping()
    @ApiOperation(value = "질문 작성", notes = "원하는 질문을 작성한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> create(
            @RequestBody @ApiParam(value = "질문 작성 정보", required = true) QuestionPostReq questionPostReq)
    {
        try {
            questionService.createQuestion(questionPostReq);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }

    @PutMapping("/{questionId}")
    @ApiOperation(value = "질문 수정", notes = "원하는 질문 내용을 수정한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> update(
            @PathVariable @ApiParam(value = "해당 질문 아이디") Long questionId,
            @RequestBody @ApiParam(value = "질문 수정 정보", required = true) QuestionPutReq questionPutReq)
    {
        try {
            questionService.modifyQuestion(questionId, questionPutReq);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }

    @PutMapping()
    @ApiOperation(value = "질문 순서 수정", notes = "원하는 질문 순서를 수정한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> orders(
            @RequestBody @ApiParam(value = "질문 수정 정보", required = true) QuestionOrdersReq questionOrdersReq)
    {
        try {
            questionService.modifyOrders(questionOrdersReq);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }

    @GetMapping("/{hamletId}")
    @ApiOperation(value = "질문 목록", notes = "해당 햄릿 질문 목록을 가져온다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = QuestionInfoRes.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<?> readAll(
            @PathVariable @ApiParam(value = "해당 햄릿 아이디", required = true) Long hamletId)
    {
        try {
            List<Question> questions = questionService.findAllQuestion(hamletId);
            return ResponseEntity.status(201).body(QuestionInfoRes.of(questions));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }

    @GetMapping("/{hamletId}/{questionId}")
    @ApiOperation(value = "질문 내용", notes = "원하는 질문 내용을 가져온다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = QuestionInfoRes.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<?> read(
            @PathVariable @ApiParam(value = "햄릿 아이디", required = true) Long hamletId,
            @PathVariable @ApiParam(value = "질문 아이디", required = true) Long questionId)
    {
        try {
            Question question = questionService.findQuestion(hamletId, questionId);
            return ResponseEntity.status(201).body(QuestionInfoRes.of(question));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }

    @DeleteMapping("/{questionId}")
    @ApiOperation(value = "질문 삭제", notes = "원하는 질문을 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> delete(
            @PathVariable @ApiParam(value = "질문 아이디", required = true) Long questionId)
    {
        try {
            questionService.deleteQuestion(questionId);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }
}
