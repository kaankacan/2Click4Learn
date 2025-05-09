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
 * DTO for user registration requests.
 * Contains all necessary user information for creating a new account.
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    @NotBlank(message = "Ad alanı zorunludur")
    @Size(min = 2, max = 50, message = "Ad 2 ile 50 karakter arasında olmalıdır")
    @Pattern(regexp = "^[a-zA-ZçÇğĞıİöÖşŞüÜ\\s-]+$", message = "Ad sadece harf boşluk ve tire içerebilir")
    private String firstname;

    @NotBlank(message = "Soyad alanı zorunludur")
    @Size(min = 2, max = 50, message = "Soyad 2 ile 50 karakter arasında olmalıdır")
    @Pattern(regexp = "^[a-zA-ZçÇğĞıİöÖşŞüÜ\\s-]+$", message = "Soyad sadece harf boşluk ve tire içerebilir")
    private String lastname;

    @NotBlank(message = "Email alanı zorunludur")
    @Email(message = "Lütfen geçerli bir email adresi giriniz")
    @Size(max = 100, message = "Email 100 karakteri geçemez")
    private String email;

    @NotBlank(message = "Şifre alanı zorunludur")
    @Size(min = 8, max = 100, message = "Şifre 8 ile 100 karakter arasında olmalıdır")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$", 
            message = "Şifreniz en az 8 karakter uzunluğunda olmalı ve en az bir büyük harf bir küçük harf ve bir rakam içermelidir")
    private String password;
} 