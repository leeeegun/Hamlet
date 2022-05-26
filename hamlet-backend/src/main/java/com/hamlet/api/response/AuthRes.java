package com.hamlet.api.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("AuthResponse")
public class AuthRes extends BaseResponseBody {

    @ApiModelProperty(name="JWT 인증 토큰", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN...")
    String accessToken;

    public static AuthRes of(Integer statusCode, String message, String accessToken) {
        AuthRes res = new AuthRes();

        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setAccessToken(accessToken);

        return res;
    }

}
