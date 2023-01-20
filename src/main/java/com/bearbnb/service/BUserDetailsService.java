package com.bearbnb.service;

import com.bearbnb.dto.AuthMemberDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BUserDetailsService implements UserDetailsService {

    private final MemberMapper memberMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<MembersDto> result = memberMapper.findUser(username, false);

        if (result.isEmpty()) {
            throw new UsernameNotFoundException("아이디 및 비밀번호를 확인하세요");
        }

        MembersDto member = result.get();


        AuthMemberDto authMember = new AuthMemberDto(
                member.getUserId(),
                member.getPwd(),
                member.isFromSocial(),
                member.getUserCode()
        );

        authMember.setName(member.getName());
        authMember.setFromSocial(member.isFromSocial());

        return authMember;
    }
}
