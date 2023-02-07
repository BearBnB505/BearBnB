package com.bearbnb.service;

import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.mapper.JoinMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class JoinServiceImpl implements JoinService{

    @Autowired
    JoinMapper joinMapper;

    @Override
    public MembersDto insertJoin(MembersDto members) throws Exception{
        joinMapper.insertJoin(members);

        return members;
    }

}
