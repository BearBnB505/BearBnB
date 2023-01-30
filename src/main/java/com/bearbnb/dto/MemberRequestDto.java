package com.bearbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberRequestDto {
    private String userId;
    private String pwd;
    private String name;
    private String userCode;

    public MembersDto toMember(PasswordEncoder passwordEncoder) {
        return MembersDto.builder()
                .userId(userId)
                .pwd(passwordEncoder.encode(pwd))
                .name(name)
//                .userCode(userCode)
                .authority(Authority.ROLE_USER)
                .build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(userId, pwd);
    }
}