package com.hamlet.controller;

import com.hamlet.model.CodeResponse;
import com.hamlet.model.Message;
import com.hamlet.service.WebSocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
public class WebScoketController {

    @Autowired
    WebSocketService webSocketService;

    @Autowired
    SimpMessagingTemplate template;

    @MessageMapping("/joinManager/{code}")
    public void joinManager(
            @DestinationVariable("code") String code,
            @Payload Message message,
            SimpMessageHeaderAccessor headerAccessor
    ) {
        webSocketService.joinManager(code, message, headerAccessor);
    }

    @MessageMapping("/exitManager/{code}")
    public void exitManager(
            @DestinationVariable("code") String code,
            @Payload Message message,
            SimpMessageHeaderAccessor headerAccessor
    ) {
        webSocketService.exitManager(code, message, headerAccessor);
    }

    @MessageMapping("/joinUser/{code}")
    public void joinUser(
            @DestinationVariable("code") String code,
            @Payload Message message,
            SimpMessageHeaderAccessor headerAccessor
    ) {
        webSocketService.joinUser(code, message, headerAccessor);
    }

    @MessageMapping("/exitUser/{code}")
    public void exitUser(
            @DestinationVariable("code") String code,
            @Payload Message message
    ) {
        webSocketService.exitUser(code, message);
    }

    @MessageMapping("/setting/{code}")
    public void setting(
            @DestinationVariable("code") String code,
            @Payload Message message
    ) {
        webSocketService.setting(code, message);
    }

    @MessageMapping("/start/{code}")
    public void start(
            @DestinationVariable("code") String code,
            @Payload Message message
    ) {
        webSocketService.start(code, message);
    }

    @MessageMapping("/finish/{code}")
    public void finish(
            @DestinationVariable("code") String code,
            @Payload Message message
    ) {
        webSocketService.finish(code, message);
    }

    @MessageMapping("/ranking/{code}")
    public void ranking(
            @DestinationVariable("code") String code,
            @Payload Message message
    ) {
        webSocketService.ranking(code, message);
    }

    @MessageMapping("/next/{code}")
    public void next(
            @DestinationVariable("code") String code,
            @Payload Message message
    ) {
        webSocketService.next(code, message);
    }

    @MessageMapping("/end/{code}")
    public void end(
            @DestinationVariable("code") String code,
            @Payload Message message
    ) {
        webSocketService.end(code, message);
    }

    @MessageMapping("/sendMessage/{code}")
    public void sendMessage(
            @DestinationVariable("code") String code,
            @Payload Message message
    ) {
        webSocketService.sendMessage(code, message);
    }

    @PostMapping("/code")
    public CodeResponse makeCode() {
        return webSocketService.makeCode();
    }

    @GetMapping("/code/{code}")
    public CodeResponse findCode(@PathVariable String code) {
        return webSocketService.findCode(code);
    }
}
