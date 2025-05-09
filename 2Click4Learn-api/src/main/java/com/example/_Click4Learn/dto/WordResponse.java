package com.example._Click4Learn.dto;

import com.example._Click4Learn.entity.Word;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WordResponse {
    private Long id;
    private String english;
    private String turkish;
    private LocalDateTime createdAt;

    public static WordResponse fromWord(Word word) {
        return new WordResponse(
            word.getId(),
            word.getEnglish(),
            word.getTurkish(),
            word.getCreatedAt()
        );
    }
} 