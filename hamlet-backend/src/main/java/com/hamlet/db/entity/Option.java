package com.hamlet.db.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Option {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@ManyToOne
	@JoinColumn(name = "question_id")
	Question question;
	
	String contents;
	
	Boolean answer;
	
	public void setQuestion(Question question) {
		this.question = question;
		if(!question.getOptions().contains(this)) {
			question.getOptions().add(this);
		}
	}

}
