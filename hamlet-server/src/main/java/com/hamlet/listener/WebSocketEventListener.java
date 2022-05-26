package com.hamlet.listener;

import com.hamlet.model.Message;
import com.hamlet.model.MessageType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;

@Component
public class WebSocketEventListener {

    @Autowired
    private SimpMessageSendingOperations messageSendingOperations;

    @EventListener
    public void handleWebSocketConnectListener(SessionConnectedEvent event) {

    }

    @EventListener
    public void handleWebSocketDisconnectListener(SessionConnectedEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());

        String code = (String) headerAccessor.getSessionAttributes().get("code");
        String nickname = (String) headerAccessor.getSessionAttributes().get("nickname");

        if(nickname != null) {
            Message newMessage = new Message();
            newMessage.setType(MessageType.LEAVE);
            newMessage.setSender(nickname);

            messageSendingOperations.convertAndSend("/room/" + code, newMessage);
        }
    }
}
