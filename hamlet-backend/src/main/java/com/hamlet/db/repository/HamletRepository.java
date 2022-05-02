package com.hamlet.db.repository;

import com.hamlet.db.entity.Hamlet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HamletRepository extends JpaRepository<Hamlet, Long> {
}
