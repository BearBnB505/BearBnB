package com.bearbnb.service;
import com.bearbnb.dto.*;


public interface MembersService {
    void UpdateMemberName(MembersDto members);

    void UpdateMemberTel(MembersDto members);

    void UpdateMemberPwd(MembersDto members);

}
