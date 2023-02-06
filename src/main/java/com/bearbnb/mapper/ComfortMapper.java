package com.bearbnb.mapper;

import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.LodgingDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface ComfortMapper {
    List<ComfortsDto> comfortList(LodgingDto lodging);
    void ComfortListUpdate(ComfortsDto ComfortBox);
}
