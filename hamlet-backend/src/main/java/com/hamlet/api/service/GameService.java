package com.hamlet.api.service;

import com.hamlet.db.entity.Game;

import java.util.List;

public interface GameService {
    void createGame(Long hamletId);
    List<Game> findAllGame(Long userId);
    Game findGame(Long gameId);
    void deleteGame(Long gameId);
    void endGame(Long gameId);
}
