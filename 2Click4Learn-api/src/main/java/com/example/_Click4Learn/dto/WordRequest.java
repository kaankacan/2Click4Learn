package com.example._Click4Learn.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WordRequest {
    @Pattern(regexp = "^[a-zA-Z\\s-']+$", message = "English word can only contain letters, spaces, hyphens and apostrophes")
    private String english;

    @Pattern(regexp = "^[a-zA-ZğüşıöçĞÜŞİÖÇ\\s-']+$", message = "Turkish word can only contain Turkish letters, spaces, hyphens and apostrophes")
    private String turkish;


} 