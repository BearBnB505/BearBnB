package com.bearbnb.service;

import com.bearbnb.configuration.SecurityUtil;
import com.bearbnb.dto.MemberResponseDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {
    private final MemberMapper memberMapper;
    private final PasswordEncoder passwordEncoder;

    public MemberResponseDto getMyInfoBySecurity() {
        return memberMapper.findById(SecurityUtil.getCurrentMemberId())
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
    }

//    @Transactional
//    public MemberResponseDto changeMemberNickname(String userId, String nickname) {
//        MembersDto member = memberMapper.findById(userId).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
////        member.setNickname(nickname);
//        return MemberResponseDto.of(memberMapper.save(member));
//    }

//    @Transactional
//    public MemberResponseDto changeMemberPassword(String email, String exPassword, String newPassword) {
//        Member member = memberMapper.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
//        if (!passwordEncoder.matches(exPassword, member.getPassword())) {
//            throw new RuntimeException("비밀번호가 맞지 않습니다");
//        }
//        member.setPassword(passwordEncoder.encode((newPassword)));
//        return MemberResponseDto.of(memberMapper.save(member));
//    }
}

