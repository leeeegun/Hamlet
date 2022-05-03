package com.hamlet.db.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.hamlet.api.request.OptionPostReq;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "options")
@NoArgsConstructor
public class Option {

	public Option(Question question, OptionPostReq option) {
		this.setQuestion(question);
		this.contents = option.getContents();
		this.answer = option.getAnswer();
	}

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
			question.setOptions(this);
		}
	}

}
