package com.hamlet.db.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Question {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@ManyToOne
	@JoinColumn(name = "hamlet_id")
	Hamlet hamlet;
	
	Integer kinds;
	
	Integer points;
	
	Integer time;
	
	Integer orders;
	
	Boolean multiple;
	
	String contents;
	
	@OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Option> options = new ArrayList<>();
	
	public void setHamlet(Hamlet hamlet) {
		this.hamlet = hamlet;
		if(!hamlet.getQuestions().contains(this)) {
			hamlet.getQuestions().add(this);
		}
	}

	public void setOptions(Option option) {
		this.options.add(option);
		if(option.getQuestion() != this) {
			option.setQuestion(this);
		}
	}
}
