package com.hamlet.api.controller;

import com.hamlet.api.request.OptionPostReq;
import com.hamlet.api.request.OptionPutReq;
import com.hamlet.api.response.BaseResponseBody;
import com.hamlet.api.response.OptionInfoRes;
import com.hamlet.api.service.OptionService;
import com.hamlet.db.entity.Option;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "선택지 API", tags = {"Option"})
@RestController
@RequestMapping("/options")
@CrossOrigin(origins = "*")
public class OptionController {

    @Autowired
    OptionService optionService;

    @PostMapping()
    @ApiOperation(value = "옵션 작성", notes = "원하는 선택지를 작성한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> create(
            @RequestBody @ApiParam(value = "선택지 작성 정보", required = true) OptionPostReq optionPostReq
    ){
        try {
            optionService.createOption(optionPostReq);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }

    @PutMapping("/{optionId}")
    @ApiOperation(value = "옵션 수정", notes = "원하는 선택지 내용을 수정한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> update(
            @PathVariable @ApiParam(value = "해당 옵션 아이디") Long optionId,
            @RequestBody @ApiParam(value = "옵션 수정 정보", required = true) OptionPutReq optionPutReq
    ){
        try {
            optionService.modifyOption(optionId, optionPutReq);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }

    @GetMapping("/{questionId}")
    @ApiOperation(value = "옵션 목록", notes = "해당 질문 내 선택지 목록을 출력한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = OptionInfoRes.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<?> readAll(
            @PathVariable @ApiParam(value = "질문 아이디", required = true) Long questionId
    ){
        try {
            List<Option> options = optionService.findAllOption(questionId);
            return ResponseEntity.status(201).body(OptionInfoRes.of(options));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }

    @GetMapping("/{questionId}/{optionId}")
    @ApiOperation(value = "옵션 내용", notes = "원하는 선택지 내용을 가져온다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = OptionInfoRes.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<?> read(
            @PathVariable @ApiParam(value = "질문 아이디", required = true) Long questionId,
            @PathVariable @ApiParam(value = "옵션 아이디", required = true) Long optionId
    ){
        try {
            Option option = optionService.findOption(questionId, optionId);
            return ResponseEntity.status(201).body(OptionInfoRes.of(option));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }

    @DeleteMapping("/{optionId}")
    @ApiOperation(value = "질문 삭제", notes = "원하는 선택지를 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> delete(
            @PathVariable @ApiParam(value = "옵션 아이디", required = true) Long optionId
    ){
        try {
            optionService.deleteOption(optionId);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Error"));
        }
    }
}
