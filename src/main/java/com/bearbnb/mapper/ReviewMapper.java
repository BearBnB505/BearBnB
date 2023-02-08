package com.bearbnb.mapper;

import com.bearbnb.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReviewMapper {
    List<ReviewDto> ReviewList();
}
