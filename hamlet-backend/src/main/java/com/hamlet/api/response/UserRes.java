package com.hamlet.api.response;

import com.hamlet.db.entity.User;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserInformationResponse")
public class UserRes {

    public UserRes(User user) {
        this.nickname = user.getNickname();
        this.email = user.getEmail();
        this.password = user.getPassword();
    }

    @ApiModelProperty(name = "유저 닉네임", example = "messi")
    String nickname;

    @ApiModelProperty(name = "유저 이메일", example = "hongildong@naver.com")
    String email;

    @ApiModelProperty(name = "유저 비밀번호", example = "12345678")
    String password;

    public static UserRes of(User user) {

        return new UserRes(user);
    }
}