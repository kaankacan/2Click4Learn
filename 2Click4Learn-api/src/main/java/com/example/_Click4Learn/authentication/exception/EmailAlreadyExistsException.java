package com.example._Click4Learn.authentication.exception;

/**
 * Exception thrown when a user tries to register with an email that already exists
 */
public class EmailAlreadyExistsException extends RuntimeException {

    public EmailAlreadyExistsException(String message) {
        super(message);
    }

    public EmailAlreadyExistsException() {
        super("Bu email adresi zaten kullanımda.");
    }
} 