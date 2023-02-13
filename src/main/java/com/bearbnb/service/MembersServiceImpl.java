package com.bearbnb.service;

import org.springframework.stereotype.Service;
import com.bearbnb.dto.*;
import com.bearbnb.mapper.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class MembersServiceImpl implements MembersService{

    @Autowired
    private MemberMapper memberMapper;

    @Override
    public void UpdateMemberName(MembersDto members) {
        memberMapper.MemberNameUpdate(members);
    }

    @Override
    public void UpdateMemberTel(MembersDto members) {
        memberMapper.MemberTelUpdate(members);

    }

    @Override
    public void UpdateMemberPwd(MembersDto members) {
        memberMapper.MemberPwdUpdate(members);

    }

    @Override
    public void deleteComplain(ComplainDto complain) {
        memberMapper.complainDelete(complain);
    }

    @Override
    public void complainDelete(List<ComplainDto> complainBox) {
        for (ComplainDto item : complainBox) {
            memberMapper.complainDelete(item);
        }
    }


}
