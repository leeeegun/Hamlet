package com.hamlet.db.repository;

import com.hamlet.db.entity.LogOption;
import com.hamlet.db.entity.LogQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogQuestionRepository extends JpaRepository<LogQuestion, Long> {
}
