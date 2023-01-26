package com.bearbnb.service;

import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.ReviewDto;
import com.bearbnb.mapper.LodgingMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LodgingDetailServiceImpl implements LodgingDetailService {

    @Autowired
    private LodgingMapper lodgingMapper;

    @Override
    public LodgingDto lodgingDetail(int idx) throws Exception {
        LodgingDto lodging = lodgingMapper.lodgingDetail(idx);
        return lodging;
    }

    @Override
    public ReviewDto reviewDetail(int idx) throws Exception {
        ReviewDto review = lodgingMapper.ReviewDetail(idx);
        return review;
    }

}
