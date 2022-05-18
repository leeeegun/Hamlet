package com.hamlet.api.controller;

import java.io.IOException;
import java.util.List;

import com.hamlet.api.service.UserService;
import com.hamlet.common.auth.HamletUserDetails;
import com.hamlet.db.entity.User;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.hamlet.api.request.HamletReq;
import com.hamlet.api.response.BaseResponseBody;
import com.hamlet.api.response.HamletRes;
import com.hamlet.api.service.HamletService;
import com.hamlet.db.entity.Hamlet;
import springfox.documentation.annotations.ApiIgnore;

@Api(value = "햄릿 API", tags = {"Hamlet"})
@RestController
@RequestMapping("/hamlets")
@CrossOrigin(origins = "*")
public class HamletController {
	
	@Autowired
	HamletService hamletService;

	@Autowired
	UserService userService;
	
	@PostMapping()
	@ApiOperation(value = "햄릿 생성", notes = "햄릿을 생성한다.")
	@ApiResponses({
			@ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
			@ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
	})
	public ResponseEntity<? extends BaseResponseBody> create(
			@ApiParam(value = "햄릿 생성 정보", required = true) @RequestBody HamletReq hamletCreateInfo,
			@ApiIgnore Authentication authentication
	){
		HamletUserDetails userDetails = (HamletUserDetails)authentication.getDetails();
		String email = userDetails.getUsername();
		User user = userService.getUserInfo(email);

		try {
			if (hamletCreateInfo.getTitle() == ""){
				throw new Exception("Title is empty");
			} else {
				hamletService.createHamlet(user, hamletCreateInfo);
				return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
			}
		} catch (Exception e) {
			return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
		}
	}
	
	@PutMapping("/{hamletId}")
	@ApiOperation(value = "햄릿 수정", notes = "해당 햄릿의 이름을 수정한다.")
	@ApiResponses({
			@ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
			@ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
	})
	public ResponseEntity<? extends BaseResponseBody> modify(
			@ApiParam(value = "수정할 햄릿 ID", required = true) @PathVariable(name = "hamletId") Long hamletId,
			@ApiParam(value = "수정할 햄릿 정보", required = true) @RequestBody HamletReq hamletReq
	){
		try {
			hamletService.modifyHamlet(hamletId, hamletReq.getTitle());
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
		}
	}
	
	@DeleteMapping("/{hamletId}")
	@ApiOperation(value = "햄릿 삭제", notes = "해당 햄릿을 삭제한다.")
	@ApiResponses({
			@ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
			@ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
	})
	public ResponseEntity<? extends BaseResponseBody> delete(
			@ApiParam(value = "삭제할 햄릿 ID", required = true) @PathVariable(name = "hamletId") Long hamletId
	){
		try {
			hamletService.deleteHamlet(hamletId);
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
		}
	}
	
	@GetMapping()
	@ApiOperation(value = "햄릿 목록 불러오기", notes = "해당 유저의 햄릿 목록을 불러온다.")
	@ApiResponses({
			@ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
			@ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
	})
	public ResponseEntity<?> getHamletList(
			@ApiIgnore Authentication authentication
	){
		HamletUserDetails userDetails = (HamletUserDetails)authentication.getDetails();
		String email = userDetails.getUsername();
		User user = userService.getUserInfo(email);

		try {
			List<Hamlet> hamlets = hamletService.getHamletList(user.getId());
			
			return ResponseEntity.status(201).body(HamletRes.of(hamlets));
		} catch (Exception e) {
			return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
		}
	}
}