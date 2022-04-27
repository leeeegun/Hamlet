package com.hamlet.db.entity.dd;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "questions")
@Getter
@Setter
@NoArgsConstructor
public class Question {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	
	@ManyToOne
	@JoinColumn(name = "question_id")
	Hamlet hamlet;
	
	int kinds;
	
	int points;
	
	int time;
	
	int orders;
	
	boolean multiple;
	
	String contents;
	
	@OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Option> options = new ArrayList<>();
	
	public void setHamlet(Hamlet hamlet) {
		this.hamlet = hamlet;
		if(!hamlet.getQuestions().contains(this)) {
		hamlet.getQuestions().add(this);
		}
	}
}
