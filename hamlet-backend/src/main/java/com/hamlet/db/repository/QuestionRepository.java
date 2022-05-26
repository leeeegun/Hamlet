package com.hamlet.db.repository;

import com.hamlet.db.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findAllByHamletId(Long hamletId);
    Long countByHamletId(Long hamletId);
}
