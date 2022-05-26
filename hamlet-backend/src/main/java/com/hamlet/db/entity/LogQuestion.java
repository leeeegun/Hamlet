package com.hamlet.db.entity;

import com.hamlet.api.request.QuestionPostReq;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "logQuestions")
@NoArgsConstructor
public class LogQuestion {

    public LogQuestion(Question question, Game game) {
        this.setGame(game);
        this.kinds = question.getKinds();
        this.points = question.getPoints();
        this.time = question.getTime();
        this.orders = question.getOrders();
        this.multiple = question.getMultiple();
        this.contents = question.getContents();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "game_id")
    Game game;

    Integer kinds;

    Integer points;

    Integer time;

    Long orders;

    Boolean multiple;

    String contents;

    @OneToMany(mappedBy = "logQuestion", cascade = CascadeType.ALL)
    private List<LogOption> logOptions = new ArrayList<>();

    public void setGame(Game game) {
        this.game = game;
        if(!game.getLogQuestions().contains(this)) {
            game.setLogQuestions(this);
        }
    }

    public void setLogOptions(LogOption logOption) {
        this.logOptions.add(logOption);
        if(logOption.getLogQuestion() != this) {
            logOption.setLogQuestion(this);
        }
    }
}
