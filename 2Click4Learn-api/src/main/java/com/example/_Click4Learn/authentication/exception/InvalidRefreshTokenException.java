package com.example._Click4Learn.authentication.exception;

/**
 * Exception thrown when a refresh token is invalid or expired
 */
public class InvalidRefreshTokenException extends RuntimeException {

    public InvalidRefreshTokenException(String message) {
        super(message);
    }

    public InvalidRefreshTokenException() {
        super("Geçersiz veya süresi dolmuş oturum. Lütfen tekrar giriş yapın.");
    }
} 