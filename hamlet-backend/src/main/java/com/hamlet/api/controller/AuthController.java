package com.hamlet.api.controller;

import com.hamlet.api.request.UserLoginReq;
import com.hamlet.api.response.AuthRes;
import com.hamlet.api.response.BaseResponseBody;
import com.hamlet.api.response.UserRes;
import com.hamlet.api.service.UserService;
import com.hamlet.common.util.JwtTokenUtil;
import com.hamlet.db.entity.User;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "인증 API", tags = {"Auth."})
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping()
    @ApiOperation(value = "로그인", notes = "<strong>아이디와 패스워드</strong>를 통해 로그인 한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = UserRes.class),
            @ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<AuthRes> login(
            @RequestBody @ApiParam(value="로그인 정보", required = true) UserLoginReq userLoginReq
    ){
        String email = userLoginReq.getEmail();
        String password = userLoginReq.getPassword();

        User user = userService.getUserInfo(email);
        // 로그인 요청한 유저로부터 입력된 패스워드 와 디비에 저장된 유저의 암호화된 패스워드가 같은지 확인.(유효한 패스워드인지 여부 확인)
        if(passwordEncoder.matches(password, user.getPassword())) {
            // 유효한 패스워드가 맞는 경우, 로그인 성공으로 응답.(액세스 토큰을 포함하여 응답값 전달)
            return ResponseEntity.ok(AuthRes.of(201, "Success", JwtTokenUtil.getToken(user.getEmail(), user.getNickname(), user.getId())));
        }
        // 유효하지 않는 패스워드인 경우, 로그인 실패로 응답.
        return ResponseEntity.status(401).body(AuthRes.of(401, "Fail", null));
    }

}
