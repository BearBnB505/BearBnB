package com.bearbnb.mapper;

import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface JoinMapper {

    void insertJoin(MembersDto members) throws Exception;

    int emailCheck(String userId) throws Exception;

    void insertProfile(String userId,String profileImg) throws Exception;

    String selectProfile(String userId) throws Exception;

}
