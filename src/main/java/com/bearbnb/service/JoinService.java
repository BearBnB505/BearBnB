package com.bearbnb.service;

import com.bearbnb.dto.MembersDto;

public interface JoinService {
    String sendSimpleMessage(String to)throws Exception;

    MembersDto insertJoin (MembersDto members) throws Exception;

    int emailCheck(String userId) throws Exception;

    void insertProfile(String userId, String profileImg) throws Exception;

    String selectProfile(String userId) throws Exception;



}
