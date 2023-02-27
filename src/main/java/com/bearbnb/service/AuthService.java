package com.bearbnb.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.bearbnb.configuration.SecurityUtil;
import com.bearbnb.dto.*;
import com.bearbnb.jwt.JwtTokenProvider;
import com.bearbnb.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {
    private final AuthenticationManagerBuilder managerBuilder;
    private final MemberMapper memberMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    @Value("${jwt.secret}")
    private String secretKey;

//    public MemberResponseDto signup(MemberRequestDto requestDto) {
//        if (memberMapper.existsByEmail(requestDto.getEmail())) {
//            throw new RuntimeException("이미 가입되어 있는 유저입니다");
//        }
//
//        MembersDto member = requestDto.toMember(passwordEncoder);
//        return MemberResponseDto.of(memberMapper.save(member));
//    }

    public TokenDto login(MemberRequestDto requestDto) {
        UsernamePasswordAuthenticationToken authenticationToken = requestDto.toAuthentication();

        Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

        return jwtTokenProvider.generateTokenDto(authentication);
    }

    public TokenDto refresh(String refreshToken) {
//        jwtTokenProvider.validateToken(refreshToken);

        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secretKey)).build();
        DecodedJWT decodedJWT = verifier.verify(refreshToken);

        // Access Token 재발급
        long now = (new Date()).getTime();
        String userId = decodedJWT.getSubject();
        MembersDto membersDto = memberMapper.findById(SecurityUtil.getCurrentMemberId())
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
        Authority authorities = membersDto.getAuthority();

        return jwtTokenProvider.refresh(userId, String.valueOf(authorities));
    }

}