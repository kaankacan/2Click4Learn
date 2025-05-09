package com.example._Click4Learn.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TranslationResponse {
    private String english;
    private String turkish;
} 