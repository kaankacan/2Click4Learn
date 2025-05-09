package com.example._Click4Learn.controller;

import com.example._Click4Learn.dto.CategoryResponse;
import com.example._Click4Learn.dto.WordRequest;
import com.example._Click4Learn.dto.WordResponse;
import com.example._Click4Learn.service.OpenAIService;
import com.example._Click4Learn.service.WordService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/words")
@RequiredArgsConstructor
public class WordController {
    private final WordService wordService;
    private final OpenAIService openAIService;

    @PostMapping("/batch")
    public ResponseEntity<List<WordResponse>> addWords(
            @Valid @RequestBody List<WordRequest> requests,
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(wordService.addWords(requests, userDetails.getUsername()));
    }

    @GetMapping
    public ResponseEntity<List<WordResponse>> getWords(
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(wordService.getWordsByUser(userDetails.getUsername()));
    }

    @GetMapping("/categorize")
    public ResponseEntity<List<CategoryResponse>> categorizeWords(
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(openAIService.categorizeUserWords(
            wordService.getUserByUsername(userDetails.getUsername())));
    }
} 