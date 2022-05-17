package com.hamlet.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class Message {
    private MessageType type;
    private Object content;
    private String sender;
    private String quizNum;
}
