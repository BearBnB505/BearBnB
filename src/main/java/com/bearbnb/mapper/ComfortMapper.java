package com.bearbnb.mapper;

import com.bearbnb.dto.ComfortsDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface ComfortMapper {
    List<ComfortsDto> comfortList();
}
