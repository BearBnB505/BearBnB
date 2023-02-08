package com.bearbnb.service;

import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.mapper.JoinMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
@Service
public class JoinServiceImpl implements JoinService{

    @Autowired
    JoinMapper joinMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public MembersDto insertJoin(MembersDto members) throws Exception{
//        비밀번호 암호화 적용
        String encodedPassword = passwordEncoder.encode(members.getPwd());
        members.setPwd(encodedPassword);
        joinMapper.insertJoin(members);

        return members;
    }

}
