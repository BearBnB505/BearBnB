package com.bearbnb.mapper;

import com.bearbnb.dto.LodgingDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface LodgingMapper {
    List<LodgingDto> lodgingList();
}