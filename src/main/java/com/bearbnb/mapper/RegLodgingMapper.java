package com.bearbnb.mapper;

import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.LodgingDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RegLodgingMapper {
    List<String> lodgingImageUrl() throws Exception;
    void insertLodgingTable(LodgingDto lodging) throws Exception;

    void insertCategory(List<ComfortsDto> dataList) throws Exception;
//void insertCategory(ComfortsDto dataList) throws Exception;
}
