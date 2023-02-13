package com.bearbnb.service;

import org.springframework.stereotype.Service;
import com.bearbnb.dto.*;
import com.bearbnb.mapper.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{
    @Autowired
    ReviewMapper reviewMapper;

    @Override
    public List<ReviewDto> ReviewList() {
      return reviewMapper.ReviewList();
    }

    @Override
    public void UpdateReview(ReviewDto review) {
        reviewMapper.ReviewUpdate(review);
    }

    @Override
    public void DeleteReview(ReviewDto review) {
        reviewMapper.ReviewDelete(review);

    }

    @Override
    public void writeReview(ReviewDto review) {
        reviewMapper.writeReview(review);
    }
}
