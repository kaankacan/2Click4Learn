package com.example._Click4Learn.authentication.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Request DTO for user authentication (login).
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {
    @NotBlank(message = "Email alanı zorunludur")
    @Email(message = "Lütfen geçerli bir email adresi giriniz")
    private String email;

    @NotBlank(message = "Şifre alanı zorunludur")
    @Size(min = 6, message = "Şifre en az 6 karakter uzunluğunda olmalıdır")
    private String password;
} 