package com.hamlet.db.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hamlet.api.request.UserReq;
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
@Table(name = "users")
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String nickname;

    String email;

    String password;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    LocalDateTime created_at;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Hamlet> hamlets = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Game> games = new ArrayList<>();

    public void setHamlets(Hamlet hamlet) {
    	this.hamlets.add(hamlet);
    	if(hamlet.getUser() != this) {
    	    hamlet.setUser(this);
    	}
    }

    public void setGames(Game game) {
        this.games.add(game);
        if(game.getUser() != this) {
            game.setUser(this);
        }
    }

    public User(UserReq u) {
        this.nickname = u.getNickname();
        this.email = u.getEmail();
        this.password = u.getPassword();
        this.created_at = LocalDateTime.now();
    }
}
