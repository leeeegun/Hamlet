package com.hamlet.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserLoginRequest")
public class UserLoginReq {

    @ApiModelProperty(name="유저 ID", example="ssafy@naver.com")
    String email;

    @ApiModelProperty(name="유저 Password", example="your_password")
    String password;
}
