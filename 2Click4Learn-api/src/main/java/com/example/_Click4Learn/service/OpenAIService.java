package com.example._Click4Learn.service;

import com.example._Click4Learn.dto.CategoryResponse;
import com.example._Click4Learn.entity.Word;
import com.example._Click4Learn.authentication.entity.User;
import com.example._Click4Learn.repository.WordRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class OpenAIService {
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;
    private final WordRepository wordRepository;

    @Value("${openai.api.key}")
    private String apiKey;

    @Value("${openai.api.base-url}")
    private String openaiApiBaseUrl;

    @Value("${openai.api.chat-completions-endpoint}")
    private String openaiApiChatCompletionsEndpoint;

    @Value("${openai.api.model}")
    private String openaiApiModel;

    @Value("${openai.api.temperature}")
    private double openaiApiTemperature;

    public List<CategoryResponse> categorizeUserWords(User user) {
        try {
            log.info("Starting word categorization for user: {}", user.getEmail());
            
            List<Word> userWords = wordRepository.findByUser(user);
            if (userWords.isEmpty()) {
                log.warn("No words found for user: {}", user.getEmail());
                return List.of();
            }
            
            log.info("Found {} words for user: {}", userWords.size(), user.getEmail());
            String prompt = buildPrompt(userWords);
            log.debug("Generated prompt: {}", prompt);
            
            String apiUrl = openaiApiBaseUrl + openaiApiChatCompletionsEndpoint;
            String response = callOpenAI(prompt, apiUrl);
            log.debug("Received response from OpenAI: {}", response);
            
            List<CategoryResponse> categories = parseResponse(response);
            log.info("Successfully categorized {} words for user: {}", categories.size(), user.getEmail());
            
            return categories;
        } catch (Exception e) {
            log.error("Error categorizing words for user {}: {}", user.getEmail(), e.getMessage(), e);
            throw new RuntimeException("Error categorizing words: " + e.getMessage(), e);
        }
    }

    private String buildPrompt(List<Word> words) {
        StringBuilder prompt = new StringBuilder();
        prompt.append("Categorize the following English words into logical categories. ");
        prompt.append("Return the response in JSON format with each word and its category. ");
        prompt.append("Example format:\n");
        prompt.append("[\n");
        prompt.append("  {\"english\": \"apple\", \"category\": \"Fruit\"},\n");
        prompt.append("  {\"english\": \"banana\", \"category\": \"Fruit\"},\n");
        prompt.append("  {\"english\": \"carrot\", \"category\": \"Vegetable\"}\n");
        prompt.append("]\n\n");
        prompt.append("Words to categorize:\n");
        
        for (Word word : words) {
            prompt.append(String.format("- %s\n", word.getEnglish()));
        }

        return prompt.toString();
    }

    private String callOpenAI(String prompt, String apiUrl) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(apiKey);

            Map<String, Object> requestBody = Map.of(
                "model", openaiApiModel,
                "messages", List.of(Map.of(
                    "role", "user",
                    "content", prompt
                )),
                "temperature", openaiApiTemperature
            );

            log.debug("Sending request to OpenAI API ({}) with headers: {}", apiUrl, headers);
            HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);
            Map<String, Object> response = restTemplate.postForObject(apiUrl, request, Map.class);

            if (response == null) {
                throw new RuntimeException("Null response from OpenAI API");
            }

            if (!response.containsKey("choices")) {
                log.error("Invalid response from OpenAI API: {}", response);
                throw new RuntimeException("Invalid response structure from OpenAI API");
            }

            List<Map<String, Object>> choices = (List<Map<String, Object>>) response.get("choices");
            if (choices.isEmpty()) {
                throw new RuntimeException("No choices in OpenAI API response");
            }

            Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
            if (message == null || !message.containsKey("content")) {
                log.error("Invalid message structure in OpenAI response: {}", message);
                throw new RuntimeException("Invalid message structure in OpenAI response");
            }

            return (String) message.get("content");
        } catch (Exception e) {
            log.error("Error calling OpenAI API: {}", e.getMessage(), e);
            throw new RuntimeException("Error calling OpenAI API: " + e.getMessage(), e);
        }
    }

    private List<CategoryResponse> parseResponse(String response) {
        try {
            log.debug("Parsing OpenAI response: {}", response);
            return objectMapper.readValue(response, 
                objectMapper.getTypeFactory().constructCollectionType(List.class, CategoryResponse.class));
        } catch (Exception e) {
            log.error("Error parsing OpenAI response: {}", e.getMessage(), e);
            throw new RuntimeException("Error parsing OpenAI response: " + e.getMessage(), e);
        }
    }
} 