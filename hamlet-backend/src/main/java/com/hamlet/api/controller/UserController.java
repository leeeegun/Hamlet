package com.hamlet.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping()
	@ApiOperation(value = "회원 가입", notes = "얻어온 정보로 회원 가입을 진행한다.")
	public ResponseEntity<? extends BaseResponseBody> register(@RequestBody UserReq registerInfo) {
		try {
			userService.registUser(registerInfo);
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(403).body(BaseResponseBody.of(403, "fail"));
		}
	}
	
	@PutMapping()
	@ApiOperation(value = "회원 수정", notes = "해당 유저의 회원 정보를 수정한다.")
	public ResponseEntity<? extends BaseResponseBody> modify(@RequestBody UserReq registerInfo /*Authentication authentication*/) {
		try {
			Long userId = 0l;
			userService.modifyUser(userId, registerInfo);
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(403).body(BaseResponseBody.of(403, "fail"));
		}
	}
	
	@GetMapping()
	@ApiOperation(value = "회원 정보 불러오기", notes = "해당 회원의 정보를 불러온다.")
	public ResponseEntity<UserRes> getUserInfo(/*Authentication authentication*/) {
		// Authentication에서 userId 얻어오는 부분 구현필요.
		Long userId = 0l;
		User user = userService.getUserInfo(userId);
		
		return ResponseEntity.status(200).body(UserRes.of(user));
	}
	
	@DeleteMapping()
	@ApiOperation(value = "회원 탈퇴", notes = "해당 회원을 삭제한다.")
	public ResponseEntity<? extends BaseResponseBody> delete(/*Authentication authentication*/) {
		try {
			// Authentication에서 userId 얻어오는 부분 구현필요.
			Long userId = 0l;
			userService.deleteUser(userId);
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(403).body(BaseResponseBody.of(403, "fail"));
		}
	}
}