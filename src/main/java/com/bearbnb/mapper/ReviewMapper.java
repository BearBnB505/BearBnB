package com.bearbnb.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.bearbnb.dto.*;

import java.util.List;

@Mapper
public interface ReviewMapper {
    List<ReviewDto> ReviewList();

    List<ReviewDto> MemberReviewList();

    void ReviewUpdate(ReviewDto review);

    void ReviewDelete(ReviewDto review);

    List<ReviewDto> ReviewListContent();

    void writeReview(ReviewDto review);

    List<ReviewDto> allReviewList();
}
