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
@ApiModel("QuestionInformationResponse")
public class QuestionInfoRes {
    public QuestionInfoRes(Question question) {
        this.questionId = question.getId();
        this.kinds = question.getKinds();
        this.point = question.getPoints();
        this.time = question.getTime();
        this.orders = question.getOrders();
        this.multiple = question.getMultiple();
        this.contents = question.getContents();
    }

    @ApiModelProperty(name = "질문 아이디", example = "1")
    Long questionId;

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
    private List<OptionInfoRes> options = new ArrayList<>();

    public static QuestionInfoRes of(Question question) {
        QuestionInfoRes questionRes = new QuestionInfoRes(question);

        for(Option option : question.getOptions()) {
            OptionInfoRes optionRes = new OptionInfoRes(option);

            questionRes.options.add(optionRes);
        }

        return questionRes;
    }

    public static List<QuestionInfoRes> of(List<Question> questions) {
        List<QuestionInfoRes> questionListRes = new ArrayList<>();

        for(Question question : questions) {
            questionListRes.add(QuestionInfoRes.of(question));
        }

        return questionListRes;
    }
}
