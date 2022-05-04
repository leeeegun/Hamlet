package com.hamlet.db.repository;

import com.hamlet.db.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    List<Game> findAllByUserIdAndFlag(Long userId, Boolean Flag);
    Game findByIdAndFlag(Long gameId, Boolean Flag);
}
