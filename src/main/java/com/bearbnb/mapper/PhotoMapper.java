package com.bearbnb.mapper;

import com.bearbnb.dto.PhotoDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PhotoMapper {

    List<PhotoDto> lodgingPhotoList(String lodgingNum) throws Exception;
}
