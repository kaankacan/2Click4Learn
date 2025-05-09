package com.example._Click4Learn.controller;

import com.example._Click4Learn.dto.TranslationRequest;
import com.example._Click4Learn.dto.TranslationResponse;
import com.example._Click4Learn.service.TranslationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/words")
@RequiredArgsConstructor
public class TranslationController {

    private final TranslationService translationService;

    @PostMapping("/translate")
    public ResponseEntity<TranslationResponse> translateWord(@Valid @RequestBody TranslationRequest request) {
        return ResponseEntity.ok(translationService.translateWord(request.getWord()));
    }
} 