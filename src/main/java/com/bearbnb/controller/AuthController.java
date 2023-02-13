package com.bearbnb.controller;

import com.bearbnb.dto.MemberRequestDto;
import com.bearbnb.dto.MemberResponseDto;
import com.bearbnb.dto.TokenDto;
import com.bearbnb.jwt.JwtTokenProvider;
import com.bearbnb.service.AuthService;
import com.bearbnb.service.MemberService;
import lombok.RequiredArgsConstructor;
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
    public ResponseEntity<TokenDto> login(@RequestBody MemberRequestDto requestDto) {
//        return ResponseEntity.ok(authService.login(requestDto));
        TokenDto token = authService.login(requestDto);
//        response.setHeader("accessToken", token.getAccessToken());
//        response.setHeader("refreshToken", token.getRefreshToken());
//        return ResponseEntity.ok().build();
        return ResponseEntity.ok().body(token);
//        return ResponseEntity.ok(authService.login(requestDto));
    }

//    @PostMapping("/token/refresh")
//    public ResponseEntity<TokenDto> refresh(@RequestHeader(value = "Authorization") String refreshToken) {
////        TokenDto token = authService.refresh(refreshToken);
////        TokenDto token = authService.refresh(refreshToken);
//
////        return ResponseEntity.ok().body(token);
//        return authService.refreshToken(refreshToken);
//    }
}