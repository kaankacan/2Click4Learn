package com.example._Click4Learn.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class TranslationRequest {
    @NotBlank(message = "Word cannot be empty")
    @Size(min = 1, max = 100, message = "Word length must be between 1 and 100 characters")
    private String word;
} 