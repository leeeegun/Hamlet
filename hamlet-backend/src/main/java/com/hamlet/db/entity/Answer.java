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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "logOption_id")
    LogOption logOption;

    String nickname;

    String contents;

    Integer time;

    public void setLogOption(LogOption logOption) {
        this.logOption = logOption;
        if(!logOption.getAnswers().contains(this)) {
            logOption.setAnswers(this);
        }
    }
}
