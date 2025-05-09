package com.example._Click4Learn.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CategoryResponse {
    private String english;
    private String category;
} 