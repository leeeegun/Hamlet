package com.hamlet.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("QuestionOrdersRequest")
public class QuestionOrdersReq {

    @ApiModelProperty(name = "질문 아이디", example = "1")
    Long questionId;

    @ApiModelProperty(name = "햄릿 아이디", example = "1")
    Long hamletId;

    @ApiModelProperty(name = "질문 순서", example = "1")
    Long orders;
}
