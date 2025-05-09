package com.example._Click4Learn.authentication.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Request DTO for refresh token endpoint.
 * Used to obtain a new access token using a valid refresh token.
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RefreshTokenRequest {
    @NotBlank(message = "Yenileme token'ı zorunludur")
    @JsonProperty("refresh_token")
    private String refreshToken;
} 