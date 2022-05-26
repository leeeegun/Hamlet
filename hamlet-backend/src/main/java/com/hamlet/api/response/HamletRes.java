package com.hamlet.api.response;

import java.util.ArrayList;
import java.util.List;

import com.hamlet.db.entity.Hamlet;

import com.hamlet.db.entity.Question;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("HamletResponse")
public class HamletRes {

	public HamletRes(Hamlet hamlet){
		this.hamletId = hamlet.getId();
		this.title = hamlet.getTitle();
	}

	@ApiModelProperty(name = "햄릿 아이디", example = "1")
	Long hamletId;

	@ApiModelProperty(name = "햄릿 이름", example = "서울 2반")
	String title;

	private List<QuestionInfoRes> questions = new ArrayList<>();
	
	public static List<HamletRes> of(List<Hamlet> hamlets) {
		List<HamletRes> hamletListRes = new ArrayList<>();

		for (Hamlet hamlet : hamlets) {
			HamletRes hamletRes = new HamletRes(hamlet);

			for(Question question : hamlet.getQuestions()) {
				QuestionInfoRes questionRes = new QuestionInfoRes(question);

				hamletRes.questions.add(questionRes);
			}

			hamletListRes.add(hamletRes);
		}
		
		return hamletListRes;
	}
	

}
