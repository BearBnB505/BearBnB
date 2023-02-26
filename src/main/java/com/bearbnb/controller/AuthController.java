package com.bearbnb.controller;

import com.bearbnb.dto.MemberRequestDto;
import com.bearbnb.dto.MemberResponseDto;
import com.bearbnb.dto.TokenDto;
import com.bearbnb.jwt.JwtTokenProvider;
import com.bearbnb.service.AuthService;
import com.bearbnb.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final MemberService memberService;

    private final JwtTokenProvider jwtTokenProvider;

//    @PostMapping("/signup")
//    public ResponseEntity<MemberResponseDto> signup(@RequestBody MemberRequestDto requestDto) {
//        return ResponseEntity.ok(authService.signup(requestDto));
//    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody MemberRequestDto requestDto) {
        TokenDto token = authService.login(requestDto);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token.getAccessToken());

        return ResponseEntity.ok()
                .headers(headers)
                .body(token.getRefreshToken());
    }

    @PostMapping("/token/refresh")
    public ResponseEntity<Void> refresh(@RequestHeader(value = "Authorization") String authorizationHeader) {
        String refreshToken = authorizationHeader.substring("Bearer ".length());
        TokenDto token = authService.refresh(refreshToken);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token.getAccessToken());

        return ResponseEntity.ok()
                .headers(headers)
                .build();
    }

}