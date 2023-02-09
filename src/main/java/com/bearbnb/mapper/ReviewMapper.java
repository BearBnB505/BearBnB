package com.bearbnb.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.bearbnb.dto.*;

import java.util.List;

@Mapper
public interface ReviewMapper {
    List<ReviewDto> ReviewList();

    void ReviewUpdate(ReviewDto review);

    void ReviewDelete(ReviewDto review);
}
