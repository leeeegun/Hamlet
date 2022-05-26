package com.hamlet.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    // 클라이언트가 웹 소켓 서버에 연결하는 데 사용할 웹 소켓 엔드 포인트 등록
    // 퀴즈 입장하기 버튼 누르면 /connect 엔드 포인트에 연결
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/hamlet-game").setAllowedOriginPatterns("*").withSockJS();
    }

    @Override // 한 클라이언트에서 다른 클라이언트로 메시지를 라우팅하는 데 사용될 메시지 브로커 구성
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/server");
        registry.enableSimpleBroker("/room");
    }
}
