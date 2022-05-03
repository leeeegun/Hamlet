package com.hamlet.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hamlet.api.request.HamletReq;
import com.hamlet.api.response.BaseResponseBody;
import com.hamlet.api.response.HamletRes;
import com.hamlet.api.service.HamletService;
import com.hamlet.db.entity.Hamlet;

@Api(value = "햄릿 API", tags = {"Hamlet"})
@RestController
@RequestMapping("/hamlets")
public class HamletController {
	
	@Autowired
	HamletService hamletService;
	
	@PostMapping()
	@ApiOperation(value = "햄릿 생성", notes = "햄릿을 생성한다.")
	public ResponseEntity<? extends BaseResponseBody> create(@ApiParam(value = "햄릿 생성 정보", required = true) @RequestBody HamletReq hamletCreateInfo) {
		try {
			hamletService.createHamlet(hamletCreateInfo);
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(403).body(BaseResponseBody.of(403, "fail"));
		}
	}
	
	@PutMapping("/{hamletId}")
	@ApiOperation(value = "햄릿 수정", notes = "해당 햄릿의 이름을 수정한다.")
	public ResponseEntity<? extends BaseResponseBody> modify(@ApiParam(value = "수정할 햄릿 ID", required = true) @PathVariable(name = "hamletId") Long hamletId, @ApiParam(value = "수정할 햄릿 정보", required = true) @RequestBody String title) {
		try {
			hamletService.modifyHamlet(hamletId, title);
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(403).body(BaseResponseBody.of(403, "fail"));
		}
	}
	
	@DeleteMapping("/{hamletId}")
	@ApiOperation(value = "햄릿 삭제", notes = "해당 햄릿을 삭제한다.")
	public ResponseEntity<? extends BaseResponseBody> delete(@ApiParam(value = "삭제할 햄릿 ID", required = true) @PathVariable(name = "hamletId") Long hamletId) {
		try {
			hamletService.deleteHamlet(hamletId);
			return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
		} catch (Exception e) {
			return ResponseEntity.status(403).body(BaseResponseBody.of(403, "fail"));
		}
	}
	
	@GetMapping()
	@ApiOperation(value = "햄릿 목록 불러오기", notes = "해당 유저의 햄릿 목록을 불러온다.")
	public ResponseEntity<?> getHamletList(/*Authentication authentication*/) {
		try {
			// Authentication에서 userId 얻어오는 부분 구현필요.
			Long userId = 0l;
			List<Hamlet> hamlets = hamletService.getHamletList(userId);
			
			return ResponseEntity.status(201).body(HamletRes.of(hamlets));
		} catch (Exception e) {
			return ResponseEntity.status(403).body(BaseResponseBody.of(403, "fail"));
		}
	}
}