package com.hamlet.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@ApiModel("UserRequest")
public class UserReq {

	@ApiModelProperty(name = "유저 닉네임", example = "messi")
	String nickname;

	@ApiModelProperty(name = "유저 이메일", example = "hongildong@naver.com")
	String email;

	@ApiModelProperty(name = "유저 비밀번호", example = "12345678")
	String password;
}
