package com.bearbnb.mapper;

import com.bearbnb.dto.MembersDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
    public List<MembersDto> memberList();
}
