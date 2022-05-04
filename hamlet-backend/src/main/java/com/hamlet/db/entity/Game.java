package com.hamlet.db.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "games")
@NoArgsConstructor
public class Game {

    public Game(Hamlet hamlet) {
        this.setUser(hamlet.getUser());
        this.title = hamlet.getTitle();
        this.flag = true;
        this.created_at = LocalDateTime.now();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    String code;

    String title;

    Boolean flag;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    LocalDateTime created_at;

    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL)
    List<LogQuestion> logQuestions = new ArrayList<>();

    public void setUser(User user) {
        this.user = user;
        if(!user.getGames().contains(this)) {
            user.setGames(this);
        }
    }

    public void setLogQuestions(LogQuestion logQuestion) {
        this.logQuestions.add(logQuestion);
        if(logQuestion.getGame() != this) {
            logQuestion.setGame(this);
        }
    }
}
