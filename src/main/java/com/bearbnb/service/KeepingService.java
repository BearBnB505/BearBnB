package com.bearbnb.service;

import com.bearbnb.dto.KeepingDto;
import com.bearbnb.dto.ReviewAvgDto;

import java.util.List;

public interface KeepingService {

    List<KeepingDto> KeepList();


    List<ReviewAvgDto> LodgingAvg(String lodgingNum);

    ReviewAvgDto reviewAvg(String lodgingNum);
}
