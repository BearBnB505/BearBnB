package com.bearbnb.controller;

import com.bearbnb.dto.MemberRequestDto;
import com.bearbnb.dto.TokenDto;
import com.bearbnb.jwt.JwtTokenProvider;
import com.bearbnb.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    private final JwtTokenProvider jwtTokenProvider;

//    @PostMapping("/signup")
//    public ResponseEntity<MemberResponseDto> signup(@RequestBody MemberRequestDto requestDto) {
//        return ResponseEntity.ok(authService.signup(requestDto));
//    }

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody MemberRequestDto requestDto) {
//        return ResponseEntity.ok(authService.login(requestDto));
        TokenDto token = authService.login(requestDto);
        return ResponseEntity.ok().body(token);
    }

//    @GetMapping("/user")
//    public String getUser(HttpServletRequest request) {
//        String authorization = request.getHeader("Authorization");
//
//    }

//    @PostMapping("/token/refresh")
//    public ResponseEntity<TokenDto> request(@RequestParam("refreshToken") String refreshToken) {
//        if (jwtTokenProvider.validateToken(refreshToken)) {
//            TokenDto tokenResponse = authService.refreshAccessToken(refreshToken);
//        }
//
//        return ResponseEntity.ok(refreshToken);
//    }
}