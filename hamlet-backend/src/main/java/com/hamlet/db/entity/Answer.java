package com.hamlet.db.entity;

import com.hamlet.api.request.AnswerPostReq;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "answers")
@NoArgsConstructor
public class Answer {

    public Answer(LogQuestion logQuestion, LogOption logOption, AnswerPostReq answerPostReq) {
        this.setLogQuestion(logQuestion);
        this.setLogOption(logOption);
        this.nickname = answerPostReq.getNickname();
        this.contents = answerPostReq.getContents();
        this.time = answerPostReq.getTime();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "logQuestion_id")
    LogQuestion logQuestion;

    @ManyToOne
    @JoinColumn(name = "logOption_id")
    LogOption logOption;

    String nickname;

    String contents;

    Integer time;

    public void setLogQuestion(LogQuestion logQuestion) {
        this.logQuestion = logQuestion;
        if(!logQuestion.getAnswers().contains(this)) {
            logQuestion.setAnswers(this);
        }
    }

    public void setLogOption(LogOption logOption) {
        this.logOption = logOption;
        if(!logOption.getAnswers().contains(this)) {
            logOption.setAnswers(this);
        }
    }
}
