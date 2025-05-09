package com.example._Click4Learn.authentication.exception;

/**
 * Exception thrown when a user cannot be found with the provided credentials
 */
public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String message) {
        super(message);
    }

    public UserNotFoundException() {
        super("Kullanıcı bulunamadı. Lütfen email adresinizi kontrol edin.");
    }
} 