package com.hamlet.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hamlet.db.entity.Hamlet;

@Repository
public interface HamletRepository extends JpaRepository<Hamlet, Long> {
	
	//@Query(value = "select * from hamlets where id = ?1", nativeQuery = true)
	//public List<Hamlet> findHamletById();

	List<Hamlet> findAllByUserId(Long userId);
}
