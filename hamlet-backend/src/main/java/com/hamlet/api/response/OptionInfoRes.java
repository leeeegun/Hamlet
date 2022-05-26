package com.hamlet.api.response;

import com.hamlet.db.entity.Option;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ApiModel("OptionInformationResponse")
public class OptionInfoRes {
    public OptionInfoRes(Option option) {
        this.optionId = option.getId();
        this.contents = option.getContents();
        this.answer = option.getAnswer();
    }

    @ApiModelProperty(name = "선택지 아이디", example = "1")
    Long optionId;

    @ApiModelProperty(name = "선택지 내용", example = "짬뽕")
    String contents;

    @ApiModelProperty(name = "정답", example = "true")
    Boolean answer;

    public static OptionInfoRes of(Option option) {

        return new OptionInfoRes(option);
    }

    public static List<OptionInfoRes> of(List<Option> options) {
        List<OptionInfoRes> optionListRes = new ArrayList<>();

        for(Option option : options) {
            optionListRes.add(OptionInfoRes.of(option));
        }

        return optionListRes;
    }
}
