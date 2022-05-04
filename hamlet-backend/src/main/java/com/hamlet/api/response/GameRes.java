package com.hamlet.api.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hamlet.db.entity.*;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ApiModel("GameResponse")
public class GameRes {

    public GameRes(Game game){
        this.gameId = game.getId();
        this.title = game.getTitle();
        this.created_at = game.getCreated_at();
    }

    @ApiModelProperty(name = "게임 아이디", example = "1")
    Long gameId;

    @ApiModelProperty(name = "게임 이름", example = "서울 2반")
    String title;

    @ApiModelProperty(name = "게임 시작 날짜", example = "2022.05.04 12:24:33")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    LocalDateTime created_at;

    @ApiModelProperty(name = "게임 질문 리스트", example = "질문 기록 목록")
    List<LogQuestionRes> logQuestions = new ArrayList<>();

    public static GameRes of(Game game) {
        GameRes gameRes = new GameRes(game);

        for(LogQuestion logQuestion : game.getLogQuestions()) {
            LogQuestionRes logQuestionRes = new LogQuestionRes(logQuestion);

            for(LogOption logOption : logQuestion.getLogOptions()) {
                LogOptionRes logOptionRes = new LogOptionRes(logOption);

                logQuestionRes.getLogOptions().add(logOptionRes);
            }

            gameRes.logQuestions.add(logQuestionRes);
        }

        return gameRes;
    }

    public static List<GameRes> of(List<Game> games) {
        List<GameRes> gameListRes = new ArrayList<>();

        for (Game game : games) {
            gameListRes.add(GameRes.of(game));
        }

        return gameListRes;
    }
}
