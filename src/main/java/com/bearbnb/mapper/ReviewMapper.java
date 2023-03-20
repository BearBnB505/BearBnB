package com.bearbnb.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.bearbnb.dto.*;

import java.util.List;

@Mapper
public interface ReviewMapper {
    List<ReviewDto> ReviewList(ReviewDto review);

    List<ReviewDto> getMemberReviewList(String userId);

    void ReviewUpdate(ReviewDto review);

    void ReviewDelete(ReviewDto review);

    ReviewDto reviewListContent(ReviewDto review);

    void writeReview(ReviewDto review);

    List<ReviewDto> allReviewList();
}
