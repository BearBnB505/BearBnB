package com.bearbnb.service;
import com.bearbnb.dto.*;

import java.util.List;

public interface ReviewService {
    List<ReviewDto> ReviewList(ReviewDto review);

    void UpdateReview(ReviewDto review);

    void DeleteReview(ReviewDto review);

    void writeReview(ReviewDto review);
}
