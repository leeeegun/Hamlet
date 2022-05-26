package com.hamlet.service;

import com.hamlet.model.CodeResponse;
import com.hamlet.model.Message;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;

public interface WebSocketService {
    void joinManager(String code, Message message, SimpMessageHeaderAccessor headerAccessor);

    void joinUser(String code, Message message, SimpMessageHeaderAccessor headerAccessor);

    void setting(String code, Message message);

    void start(String code, Message message);

    void finish(String code, Message message);

    void ranking(String code, Message message);

    void next(String code, Message message);

    void end(String code, Message message);

    void sendMessage(String code, Message message);

    void exitManager(String code, Message message, SimpMessageHeaderAccessor headerAccessor);

    void exitUser(String code, Message message);

    CodeResponse makeCode();

    CodeResponse findCode(String code);


}
