package com.hamlet.api.response;

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
@ApiModel("OptionInformationResponse")
public class OptionInfoRes {

    @ApiModelProperty(name = "선택지 아이디", example = "1")
    Long optionId;

    @ApiModelProperty(name = "선택지 내용", example = "짬뽕")
    String contents;

    @ApiModelProperty(name = "정답", example = "true")
    Boolean answer;

    public static OptionInfoRes of(Option option) {
        OptionInfoRes optionRes = new OptionInfoRes();

        optionRes.setOptionId(option.getId());
        optionRes.setContents(option.getContents());
        optionRes.setAnswer(option.getAnswer());

        return optionRes;
    }

    public static List<OptionInfoRes> of(List<Option> options) {
        List<OptionInfoRes> optionListRes = new ArrayList<>();

        OptionInfoRes optionRes = new OptionInfoRes();
        for(Option option : options) {
            optionRes.of(option);
            optionListRes.add(optionRes);
        }

        return optionListRes;
    }
}
