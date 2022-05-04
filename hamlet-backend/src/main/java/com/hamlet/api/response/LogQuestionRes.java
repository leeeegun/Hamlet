package com.hamlet.api.response;

import com.hamlet.db.entity.LogOption;
import com.hamlet.db.entity.LogQuestion;
import com.hamlet.db.entity.Option;
import com.hamlet.db.entity.Question;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ApiModel("LogQuestionResponse")
public class LogQuestionRes {

    public LogQuestionRes(LogQuestion logQuestion) {
        this.logQuestionId = logQuestion.getId();
        this.kinds = logQuestion.getKinds();
        this.point = logQuestion.getPoints();
        this.time = logQuestion.getTime();
        this.orders = logQuestion.getOrders();
        this.multiple = logQuestion.getMultiple();
        this.contents = logQuestion.getContents();
    }

    @ApiModelProperty(name = "질문 아이디", example = "1")
    Long logQuestionId;

    @ApiModelProperty(name = "질문 종류", example = "1")
    Integer kinds;

    @ApiModelProperty(name = "질문 점수", example = "20")
    Integer point;

    @ApiModelProperty(name = "질문 시간", example = "10")
    Integer time;

    @ApiModelProperty(name = "질문 순서", example = "1")
    Long orders;

    @ApiModelProperty(name = "다중 정답 유무", example = "true")
    Boolean multiple;

    @ApiModelProperty(name = "질문 내용", example = "1 + 1 = ?")
    String contents;

    @ApiModelProperty(name = "선택지 리스트", example = "짜장, 짬뽕 등등")
    private List<LogOptionRes> LogOptions = new ArrayList<>();

    public static LogQuestionRes of(LogQuestion logQuestion) {
        LogQuestionRes logQuestionRes = new LogQuestionRes(logQuestion);

        for(LogOption logOption : logQuestion.getLogOptions()) {
            LogOptionRes logOptionRes = new LogOptionRes(logOption);

            logQuestionRes.LogOptions.add(logOptionRes);
        }

        return logQuestionRes;
    }

    public static List<LogQuestionRes> of(List<LogQuestion> logQuestions) {
        List<LogQuestionRes> logQuestionListRes = new ArrayList<>();

        for(LogQuestion logQuestion : logQuestions) {
            logQuestionListRes.add(LogQuestionRes.of(logQuestion));
        }

        return logQuestionListRes;
    }
}
