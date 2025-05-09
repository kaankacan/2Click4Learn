package com.example._Click4Learn.authentication.service;

import com.example._Click4Learn.authentication.dto.AuthenticationRequest;
import com.example._Click4Learn.authentication.dto.AuthenticationResponse;
import com.example._Click4Learn.authentication.dto.RefreshTokenRequest;
import com.example._Click4Learn.authentication.dto.RegisterRequest;
import com.example._Click4Learn.authentication.entity.RefreshToken;
import com.example._Click4Learn.authentication.entity.Role;
import com.example._Click4Learn.authentication.entity.User;
import com.example._Click4Learn.authentication.exception.EmailAlreadyExistsException;
import com.example._Click4Learn.authentication.exception.InvalidRefreshTokenException;
import com.example._Click4Learn.authentication.exception.UserNotFoundException;
import com.example._Click4Learn.authentication.repository.RefreshTokenRepository;
import com.example._Click4Learn.authentication.repository.UserRepository;
import com.example._Click4Learn.authentication.security.JwtService;
import com.example._Click4Learn.config.ApplicationConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RefreshTokenRepository refreshTokenRepository;
    private final ApplicationConfig applicationConfig;

    @Transactional
    public AuthenticationResponse register(RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException();
        }

        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateAccessToken(user);
        var refreshToken = createRefreshToken(user);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken.getToken())
                .build();
    }

    @Transactional
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Geçersiz email veya şifre. Lütfen bilgilerinizi kontrol edin.");
        }

        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UserNotFoundException());
        
        // Delete existing refresh tokens for the user
        refreshTokenRepository.deleteByUser(user);
        
        var jwtToken = jwtService.generateAccessToken(user);
        var refreshToken = createRefreshToken(user);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken.getToken())
                .build();
    }

    @Transactional
    public AuthenticationResponse refreshToken(RefreshTokenRequest request) {
        return refreshTokenRepository.findByToken(request.getRefreshToken())
                .map(this::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    String accessToken = jwtService.generateAccessToken(user);
                    return AuthenticationResponse.builder()
                            .accessToken(accessToken)
                            .refreshToken(request.getRefreshToken())
                            .build();
                })
                .orElseThrow(() -> new InvalidRefreshTokenException());
    }

    @Transactional
    public void logout(String refreshToken) {
        refreshTokenRepository.findByToken(refreshToken)
                .ifPresent(refreshTokenRepository::delete);
    }

    private RefreshToken createRefreshToken(User user) {
        RefreshToken refreshToken = RefreshToken.builder()
                .user(user)
                .token(UUID.randomUUID().toString())
                .expiryDate(Instant.now().plusMillis(applicationConfig.getRefreshTokenExpiration()))
                .build();
        return refreshTokenRepository.save(refreshToken);
    }

    private RefreshToken verifyExpiration(RefreshToken token) {
        if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(token);
            throw new InvalidRefreshTokenException("Oturum süreniz dolmuş. Lütfen tekrar giriş yapın.");
        }
        return token;
    }
} 