package com.example._Click4Learn.repository;

import com.example._Click4Learn.entity.Word;
import com.example._Click4Learn.authentication.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WordRepository extends JpaRepository<Word, Long> {
    List<Word> findByUser(User user);
} 