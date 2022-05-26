package com.hamlet.db.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "hamlets")
@NoArgsConstructor
public class Hamlet {
    public Hamlet(User user, String title) {
        this.setUser(user);
        this.title = title;
        this.created_at = LocalDateTime.now();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String title;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    LocalDateTime created_at;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @OneToMany(mappedBy = "hamlet", cascade = CascadeType.ALL)
    List<Question> questions = new ArrayList<>();

    public void setUser(User user) {
    	this.user = user;
    	if(!user.getHamlets().contains(this)) {
    	    user.setHamlets(this);
    	}
    }

    public void setQuestions(Question question) {
        this.questions.add(question);
        if(question.getHamlet() != this) {
            question.setHamlet(this);
        }
    }
}
