package com.hamlet.api.response;

import java.util.ArrayList;
import java.util.List;

import com.hamlet.db.entity.Hamlet;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@ApiModel("HamletResponse")
public class HamletRes {

	@ApiModelProperty(name = "햄릿 이름", example = "서울 2반")
	String title;
	private List<HamletRes> hamlets = new ArrayList<>();
	
	public static HamletRes of(List<Hamlet> h) {
		HamletRes res = new HamletRes();
		for (Hamlet hamlet : h) {
			res.hamlets.add(new HamletRes(hamlet.getTitle()));
		}
		
		return res;
	}
	
	HamletRes(String title){
		this.title = title;
	}
}
