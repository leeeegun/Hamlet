package com.hamlet.db.entity.dd;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "hamlets")
@Getter
@Setter
@NoArgsConstructor
public class Hamlet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String title;
    LocalDateTime created_at;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @OneToMany(mappedBy = "hamlet", cascade = CascadeType.ALL)
    List<Question> questions = new ArrayList<>();
    
    public void setUser(User user) {
    	this.user = user;
    	if(!user.getHamlets().contains(this)) {
    	user.getHamlets().add(this);
    	}
    }
}
