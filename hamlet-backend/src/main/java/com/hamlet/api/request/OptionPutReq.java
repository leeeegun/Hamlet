package com.hamlet.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("OptionPutRequest")
public class OptionPutReq {

    @ApiModelProperty(name = "선택지 내용", example = "짬뽕")
    String contents;

    @ApiModelProperty(name = "정답", example = "true")
    Boolean answer;
}
