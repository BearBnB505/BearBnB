package com.bearbnb.service;
import com.bearbnb.dto.*;

import java.util.List;


public interface MembersService {
    void UpdateMemberName(MembersDto members);

    void UpdateMemberTel(MembersDto members);

    void UpdateMemberPwd(MembersDto members);

    void deleteComplain(ComplainDto complain);

    void complainDelete(List<ComplainDto> complainBox);

    void memberDelete(MembersDto members);
}
