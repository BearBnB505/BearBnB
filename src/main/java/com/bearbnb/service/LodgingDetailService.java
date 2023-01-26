package com.bearbnb.service;

import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.ReviewDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LodgingDetailService {

    LodgingDto lodgingDetail(int idx) throws Exception;

    ReviewDto reviewDetail(int idx) throws Exception;
}
