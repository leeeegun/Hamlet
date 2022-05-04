package com.hamlet.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("OptionPostRequest")
public class OptionPostReq {

    @ApiModelProperty(name = "질문 아이디", example = "1")
    Long questionId;

    @ApiModelProperty(name = "선택지 내용", example = "짬뽕")
    String contents;

    @ApiModelProperty(name = "정답", example = "true")
    Boolean answer;
}
