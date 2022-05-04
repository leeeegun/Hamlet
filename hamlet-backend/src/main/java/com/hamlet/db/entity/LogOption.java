package com.hamlet.db.entity;

import com.hamlet.api.request.OptionPostReq;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "logOptions")
@NoArgsConstructor
public class LogOption {

    public LogOption(Option option, LogQuestion logQuestion) {
        this.setLogQuestion(logQuestion);
        this.contents = option.getContents();
        this.answer = option.getAnswer();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "logQuestion_id")
    LogQuestion logQuestion;

    String contents;

    Boolean answer;

    @OneToMany(mappedBy = "logOption", cascade = CascadeType.ALL)
    List<Answer> answers = new ArrayList<>();

    public void setLogQuestion(LogQuestion logQuestion) {
        this.logQuestion = logQuestion;
        if(!logQuestion.getLogOptions().contains(this)) {
            logQuestion.setLogOptions(this);
        }
    }

    public void setAnswers(Answer answer) {
        this.answers.add(answer);
        if(answer.getLogOption() != this) {
            answer.setLogOption(this);
        }
    }
}
