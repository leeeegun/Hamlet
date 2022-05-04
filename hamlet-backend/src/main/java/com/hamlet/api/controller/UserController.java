package com.hamlet.api.controller;

import com.hamlet.common.auth.HamletUserDetails;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hamlet.api.request.UserReq;
import com.hamlet.api.response.BaseResponseBody;
import com.hamlet.api.response.UserRes;
import com.hamlet.api.service.UserService;
import com.hamlet.db.entity.User;
import springfox.documentation.annotations.ApiIgnore;

@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping()
	@ApiOperation(value = "회원 가입", notes = "얻어온 정보로 회원 가입을 진행한다.")
	@ApiResponses({
			@ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
			@ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
	})
	public ResponseEntity<? extends BaseResponseBody> register(@RequestBody UserReq registerInfo) {
		try {
			userService.registUser(registerInfo);
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(403).body(BaseResponseBody.of(401, "fail"));
		}
	}
	
	@PutMapping()
	@ApiOperation(value = "회원 수정", notes = "해당 유저의 회원 정보를 수정한다.")
	@ApiResponses({
			@ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
			@ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
	})
	public ResponseEntity<? extends BaseResponseBody> modify(
			@RequestBody @ApiParam(value="수정 정보", required = true) UserReq registerInfo,
			@ApiIgnore Authentication authentication
	){
		HamletUserDetails userDetails = (HamletUserDetails)authentication.getDetails();
		String email = userDetails.getUsername();
		User user = userService.getUserInfo(email);

		try {
			userService.modifyUser(user.getId(), registerInfo);
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(403).body(BaseResponseBody.of(401, "fail"));
		}
	}
	
	@GetMapping()
	@ApiOperation(value = "회원 정보 불러오기", notes = "해당 회원의 정보를 불러온다.")
	@ApiResponses({
			@ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
			@ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
	})
	public ResponseEntity<UserRes> getUserInfo(
			@ApiIgnore Authentication authentication
	){
		HamletUserDetails userDetails = (HamletUserDetails)authentication.getDetails();
		String email = userDetails.getUsername();
		User user = userService.getUserInfo(email);
		
		return ResponseEntity.status(200).body(UserRes.of(user));
	}
	
	@DeleteMapping()
	@ApiOperation(value = "회원 탈퇴", notes = "해당 회원을 삭제한다.")
	@ApiResponses({
			@ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
			@ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
	})
	public ResponseEntity<? extends BaseResponseBody> delete(
			@ApiIgnore Authentication authentication
	){
		HamletUserDetails userDetails = (HamletUserDetails)authentication.getDetails();
		String email = userDetails.getUsername();
		User user = userService.getUserInfo(email);

		try {
			userService.deleteUser(user.getId());
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(403).body(BaseResponseBody.of(401, "fail"));
		}
	}
}