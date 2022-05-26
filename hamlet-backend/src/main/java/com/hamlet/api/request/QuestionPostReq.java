package com.hamlet.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("QuestionPostRequest")
public class QuestionPostReq {

    @ApiModelProperty(name = "햄릿 아이디", example = "1")
    Long hamletId;

    @ApiModelProperty(name = "질문 종류", example = "1")
    Integer kinds;

    @ApiModelProperty(name = "질문 점수", example = "20")
    Integer point;

    @ApiModelProperty(name = "질문 시간", example = "10")
    Integer time;

    @ApiModelProperty(name = "다중 정답 유무", example = "true")
    Boolean multiple;

    @ApiModelProperty(name = "질문 내용", example = "1 + 1 = ?")
    String contents;
}
