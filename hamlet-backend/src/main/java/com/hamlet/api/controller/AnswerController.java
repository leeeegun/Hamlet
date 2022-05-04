package com.hamlet.api.controller;

import com.hamlet.api.request.AnswerPostReq;
import com.hamlet.api.request.OptionPostReq;
import com.hamlet.api.response.BaseResponseBody;
import com.hamlet.api.service.AnswerService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Api(value = "입력 API", tags = {"Answer"})
@RestController
@RequestMapping("/answers")
public class AnswerController {

    @Autowired
    AnswerService answerService;

    @PostMapping()
    @ApiOperation(value = "참여자 입력값 저장", notes = "게임 참여자가 입력한 정답을 기록한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> create(
            @RequestBody @ApiParam(value = "참여자 입력 정보", required = true) AnswerPostReq answerPostreq
    ){
        try {
            answerService.createAnswer(answerPostreq);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
        }
    }
}
