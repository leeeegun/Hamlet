package com.hamlet.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
@ApiModel("UserRequest")
public class UserReq {

	@ApiModelProperty(name = "유저 닉네임", example = "messi")
	@NotBlank(message = "Nickname size invalid")
	@Size(min = 2, max = 10, message = "Nickname size invalid")
	String nickname;

	@ApiModelProperty(name = "유저 이메일", example = "hongildong@naver.com")
	@NotBlank(message = "Email size invalid")
	@Size(min = 2, max = 30, message = "Email size invalid")
	@Email(regexp = "[0-9a-zA-Z]+[@]{1}[0-9a-zA-Z]+[.]{1}[a-zA-Z]+", message = "Email Pattern invalid")
	String email;

	@ApiModelProperty(name = "유저 비밀번호", example = "12345678a!")
	@NotBlank(message = "Password size invalid")
	@Pattern(regexp = "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&]).+", message = "Password Pattern invalid")
	@Size(min = 8, max = 24, message = "Password size invalid")
	String password;
}
