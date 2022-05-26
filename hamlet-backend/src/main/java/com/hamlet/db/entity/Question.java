package com.hamlet.db.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;


import com.hamlet.api.request.QuestionPostReq;
import com.hamlet.api.request.QuestionPutReq;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "questions")
@NoArgsConstructor
public class Question {
	public Question(QuestionPostReq question, Hamlet hamlet) {
		this.setHamlet(hamlet);
		this.kinds = question.getKinds();
		this.points = question.getPoint();
		this.time = question.getTime();
		this.multiple = question.getMultiple();
		this.contents = question.getContents();
	}

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@ManyToOne
	@JoinColumn(name = "hamlet_id")
	Hamlet hamlet;

	Integer kinds;

	Integer points;

	Integer time;
	
	Long orders;

	Boolean multiple;

	String contents;

	@OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Option> options = new ArrayList<>();

	public void setHamlet(Hamlet hamlet) {
		this.hamlet = hamlet;
		if(!hamlet.getQuestions().contains(this)) {
			hamlet.setQuestions(this);
		}
	}

	public void setOptions(Option option) {
		this.options.add(option);
		if(option.getQuestion() != this) {
			option.setQuestion(this);
		}
	}
}
