package com.bearbnb.service;

import com.bearbnb.dto.MemberRequestDto;
import com.bearbnb.dto.MemberResponseDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.dto.TokenDto;
import com.bearbnb.jwt.JwtTokenProvider;
import com.bearbnb.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {
    private final AuthenticationManagerBuilder managerBuilder;
    private final MemberMapper memberMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

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
        return jwtTokenProvider.refresh(refreshToken);
    }
}