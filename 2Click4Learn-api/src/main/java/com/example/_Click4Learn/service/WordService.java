package com.example._Click4Learn.service;

import com.example._Click4Learn.dto.WordRequest;
import com.example._Click4Learn.dto.WordResponse;
import com.example._Click4Learn.entity.Word;
import com.example._Click4Learn.authentication.entity.User;
import com.example._Click4Learn.repository.WordRepository;
import com.example._Click4Learn.authentication.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WordService {
    private final WordRepository wordRepository;
    private final UserRepository userRepository;

    @Transactional
    public List<WordResponse> addWords(List<WordRequest> requests, String username) {
        User user = getUserByUsername(username);
        List<Word> words = requests.stream()
            .map(request -> {
                Word word = new Word();
                word.setEnglish(request.getEnglish());
                word.setTurkish(request.getTurkish());
                word.setUser(user);
                return word;
            })
            .collect(Collectors.toList());
        return wordRepository.saveAll(words).stream()
            .map(this::mapToResponse)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<WordResponse> getWordsByUser(String username) {
        User user = getUserByUsername(username);
        return wordRepository.findByUser(user).stream()
            .map(this::mapToResponse)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public User getUserByUsername(String username) {
        return userRepository.findByEmail(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
    }

    private WordResponse mapToResponse(Word word) {
        return new WordResponse(
            word.getId(),
            word.getEnglish(),
            word.getTurkish(),
            word.getCreatedAt()
        );
    }
} 