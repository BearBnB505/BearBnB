package com.bearbnb.service;

import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;

public interface JoinService {
    MembersDto insertJoin (MembersDto members) throws Exception;

    int emailCheck(String userId) throws Exception;



}
