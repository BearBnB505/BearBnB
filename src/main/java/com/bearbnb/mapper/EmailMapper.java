package com.bearbnb.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface EmailMapper {
    void approveLodging(String lodgingNum) throws Exception;
}
