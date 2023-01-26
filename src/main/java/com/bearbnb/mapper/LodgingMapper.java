package com.bearbnb.mapper;

import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.dto.ReviewDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface LodgingMapper {
    List<LodgingDto> lodgingList();

    LodgingDto lodgingDetail(int idx) throws Exception;

    ReviewDto ReviewDetail(int idx) throws Exception;
}
