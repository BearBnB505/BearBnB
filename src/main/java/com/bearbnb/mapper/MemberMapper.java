package com.bearbnb.mapper;

import com.bearbnb.dto.MembersDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Optional;

@Mapper
public interface MemberMapper {
//    public Optional<MembersDto> findById(@Param("userId") String userId, @Param("social") boolean social);
    public Optional<MembersDto> findById(@Param("userId") String userId);
}
