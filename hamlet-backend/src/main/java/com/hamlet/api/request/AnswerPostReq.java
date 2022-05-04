package com.hamlet.api.request;

import com.hamlet.db.entity.LogOption;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@ApiModel("AnswerPostRequest")
public class AnswerPostReq {

    @ApiModelProperty(name = "고른 질문 아이디", example = "1")
    Long logQuestionId;

    @ApiModelProperty(name = "고른 옵션 아이디", example = "1")
    Long logOptionId;

    @ApiModelProperty(name = "참여자 아이디", example = "서울_2반_이호성")
    String nickname;

    @ApiModelProperty(name = "입력한 정답 또는 대답", example = "짬뽕")
    String contents;

    @ApiModelProperty(name = "맞춘 시간", example = "서울 2반")
    Integer time;
}
