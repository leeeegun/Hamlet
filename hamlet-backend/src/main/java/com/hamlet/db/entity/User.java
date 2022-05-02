package com.hamlet.db.entity;

import lombok.Generated;
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
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String nickname;
    String email;
    String password;
    LocalDateTime create_at;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Hamlet> hamlets = new ArrayList<>();
    
    public void setHamlets(Hamlet hamlet) {
    	this.hamlets.add(hamlet);
    	if(hamlet.getUser() != this) {
    	    hamlet.setUser(this);
    	}
    }
}
