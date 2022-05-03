package com.hamlet.api.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@ApiModel("HamletRequest")
public class HamletReq {

	@ApiModelProperty(name = "유저 아이디", example = "1")
	Long userId;

	@ApiModelProperty(name = "햄릿 제목", example = "서울 2반")
	String title;
}
