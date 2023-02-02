package com.bearbnb.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RegLodgingMapper {
    List<String> lodgingImageUrl() throws Exception;
}
