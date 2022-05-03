package com.hamlet.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@ApiModel("HamletRequest")
public class HamletReq {

	@ApiModelProperty(name = "햄릿 제목", example = "서울 2반")
	String title;
}
