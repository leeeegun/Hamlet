package com.hamlet.api.controller;

import com.hamlet.api.request.HamletReq;
import com.hamlet.api.response.BaseResponseBody;
import com.hamlet.api.response.GameRes;
import com.hamlet.api.service.GameService;
import com.hamlet.api.service.UserService;
import com.hamlet.common.auth.HamletUserDetails;
import com.hamlet.db.entity.Game;
import com.hamlet.db.entity.User;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@Api(value = "게임 API", tags = {"Game"})
@RestController
@RequestMapping("/games")
public class GameController {

    @Autowired
    GameService gameService;

    @Autowired
    UserService userService;

    @PostMapping("/{hamletId}")
    @ApiOperation(value = "게임 생성", notes = "게임을 생성한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> create(
            @ApiParam(value = "햄릿 아이디", required = true) @PathVariable(name = "hamletId") Long hamletId
    ){
        try {
            gameService.createGame(hamletId);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
        }
    }

    @PutMapping("/{gameId}")
    @ApiOperation(value = "게임 종료", notes = "해당 게임 종료 후 false로 수정한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> end(
            @ApiParam(value = "수정할 게임 ID", required = true) @PathVariable(name = "hamletId") Long gameId
    ){
        try {
            gameService.endGame(gameId);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
        }
    }

    @GetMapping()
    @ApiOperation(value = "게임 목록 불러오기", notes = "종료된 게임 목록을 불러온다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = GameRes.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<?> readAll(
            @ApiIgnore Authentication authentication
    ){
        HamletUserDetails userDetails = (HamletUserDetails)authentication.getDetails();
        String email = userDetails.getUsername();
        User user = userService.getUserInfo(email);

        try {
            List<Game> games = gameService.findAllGame(user.getId());

            return ResponseEntity.status(201).body(GameRes.of(games));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
        }
    }

    @GetMapping("/{gameId}")
    @ApiOperation(value = "게임 내용 불러오기", notes = "종료된 게임 기록을 불러온다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = GameRes.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<?> read(
            @ApiParam(value = "불러올 게임 아이디", required = true) @PathVariable(name = "gameId") Long gameId
    ){
        try {
            Game game = gameService.findGame(gameId);

            return ResponseEntity.status(201).body(GameRes.of(game));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
        }
    }

    @DeleteMapping("/{gameId}")
    @ApiOperation(value = "게임 삭제", notes = "해당 게임 기록을 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
            @ApiResponse(code = 401, message = "실패", response = BaseResponseBody.class)
    })
    public ResponseEntity<? extends BaseResponseBody> delete(
            @ApiParam(value = "삭제할 게임 ID", required = true) @PathVariable(name = "gameId") Long gameId
    ){
        try {
            gameService.deleteGame(gameId);
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
        }
    }
}
