package com.hamlet.api.response;

import com.hamlet.db.entity.LogOption;
import com.hamlet.db.entity.Option;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ApiModel("LogOptionResponse")
public class LogOptionRes {

    public LogOptionRes(LogOption logOption) {
        this.logOptionId = logOption.getId();
        this.contents = logOption.getContents();
        this.answer = logOption.getAnswer();
    }

    @ApiModelProperty(name = "선택지 아이디", example = "1")
    Long logOptionId;

    @ApiModelProperty(name = "선택지 내용", example = "짬뽕")
    String contents;

    @ApiModelProperty(name = "정답", example = "true")
    Boolean answer;

    public static LogOptionRes of(LogOption logOption) {

        return new LogOptionRes(logOption);
    }

    public static List<LogOptionRes> of(List<LogOption> logOptions) {
        List<LogOptionRes> logOptionListRes = new ArrayList<>();

        for(LogOption logOption : logOptions) {
            logOptionListRes.add(LogOptionRes.of(logOption));
        }

        return logOptionListRes;
    }
}
