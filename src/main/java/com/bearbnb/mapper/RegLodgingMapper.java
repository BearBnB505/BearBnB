package com.bearbnb.mapper;

import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.PhotoDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RegLodgingMapper {


    void insertLodgingTable(LodgingDto lodging) throws Exception;

    //선생님코드
    void insertCategory(List<ComfortsDto> dataList) throws Exception;
//void insertCategory(ComfortsDto dataList) throws Exception;

    //선생님 코드 보고 따라친거
    void insertUrl(List<PhotoDto> photoList) throws Exception;
}
