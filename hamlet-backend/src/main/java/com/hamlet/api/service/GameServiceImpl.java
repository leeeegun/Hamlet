package com.hamlet.api.service;

import com.hamlet.db.entity.*;
import com.hamlet.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service("GameService")
public class GameServiceImpl implements GameService{

    @Autowired
    GameRepository gameRepository;

    @Autowired
    LogQuestionRepository logQuestionRepository;

    @Autowired
    LogOptionRepository logOptionRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    HamletRepository hamletRepository;

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    OptionRepository optionRepository;

    @Override
    public void createGame(Long hamletId) {
        Hamlet hamlet = hamletRepository.findById(hamletId).get();

        Game game = new Game(hamlet);

        Game GameInstance = gameRepository.save(game);

        List<Question> questions = questionRepository.findAllByHamletId(hamletId);

        for(Question question : questions) {
            LogQuestion logQuestion = new LogQuestion(question, GameInstance);

            LogQuestion questionInstance = logQuestionRepository.save(logQuestion);

            List<Option> options = optionRepository.findAllByQuestionId(question.getId());

            for(Option option : options) {
                LogOption logOption = new LogOption(option, questionInstance);

                logOptionRepository.save(logOption);
            }
        }
    }

    @Override
    public void endGame(Long gameId) {
        Game game = gameRepository.findById(gameId).get();

        game.setFlag(false);

        gameRepository.save(game);
    }

    @Override
    public List<Game> findAllGame(Long userId) {
        return gameRepository.findAllByUserIdAndFlag(userId, false);
    }

    @Override
    public Game findGame(Long gameId) {
        return gameRepository.findByIdAndFlag(gameId, false);
    }

    @Override
    public void deleteGame(Long gameId) {
        gameRepository.deleteById(gameId);
    }
}
