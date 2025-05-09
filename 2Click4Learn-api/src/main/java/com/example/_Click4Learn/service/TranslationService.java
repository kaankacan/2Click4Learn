package com.example._Click4Learn.service;

import com.example._Click4Learn.dto.TranslationResponse;
import com.google.cloud.translate.Translate;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class TranslationService {

    @Value("${google.cloud.translate.api-key}")
    private String apiKey;

    public TranslationResponse translateWord(String word) {
        try {
            Translate translate = TranslateOptions.newBuilder()
                    .setApiKey(apiKey)
                    .build()
                    .getService();

            Translation translation = translate.translate(
                    word,
                    Translate.TranslateOption.targetLanguage("tr")
            );

            return TranslationResponse.builder()
                    .english(word)
                    .turkish(translation.getTranslatedText())
                    .build();

        } catch (Exception e) {
            log.error("Translation error for word {}: {}", word, e.getMessage());
            throw new RuntimeException("Translation failed: " + e.getMessage());
        }
    }
} 