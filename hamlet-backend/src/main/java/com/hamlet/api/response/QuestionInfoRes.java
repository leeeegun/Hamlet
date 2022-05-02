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
public class QuestionInfoRes extends BaseResponseBody {

    @ApiModelProperty(name = "질문 아이디", example = "1")
    Long questionId;

    @ApiModelProperty(name = "질문 종류", example = "1")
    Integer kinds;

    @ApiModelProperty(name = "질문 점수", example = "20")
    Integer point;

    @ApiModelProperty(name = "질문 시간", example = "10")
    Integer time;

    @ApiModelProperty(name = "질문 순서", example = "1")
    Integer orders;

    @ApiModelProperty(name = "다중 정답 유무", example = "true")
    Boolean multiple;

    @ApiModelProperty(name = "질문 내용", example = "1 + 1 = ?")
    String contents;

    @ApiModelProperty(name = "선택지 리스트", example = "짜장, 짬뽕 등등")
    private List<OptionInfoRes> options = new ArrayList<>();

    public static QuestionInfoRes of(Question question) {
        QuestionInfoRes questionRes = new QuestionInfoRes();

        questionRes.setQuestionId(question.getId());
        questionRes.setKinds(question.getKinds());
        questionRes.setPoint(question.getPoints());
        questionRes.setTime(question.getTime());
        questionRes.setOrders(question.getOrders());
        questionRes.setMultiple(question.getMultiple());
        questionRes.setContents(question.getContents());

        OptionInfoRes optionRes = new OptionInfoRes();
        for(Option option : question.getOptions()) {
            optionRes.setOptionId(option.getId());
            optionRes.setContents(option.getContents());
            optionRes.setAnswer(option.getAnswer());
            questionRes.options.add(optionRes);
        }

        return questionRes;
    }

    public static List<QuestionInfoRes> of(List<Question> questions) {
        List<QuestionInfoRes> questionListRes = new ArrayList<>();

        QuestionInfoRes questionRes = new QuestionInfoRes();
        for(Question question : questions) {
            questionRes.of(question);
            questionListRes.add(questionRes);
        }

        return questionListRes;
    }
}
