package com.bearbnb.service;

import com.bearbnb.dto.*;
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
    public List<PhotoDto> photoDetail(String lodgingNum) throws Exception {
        List<PhotoDto> photo = lodgingMapper.photoDetail(lodgingNum);
        return photo;
    }

    @Override
    public List<ReviewDto> reviewDetail(String lodgingNum) throws Exception {
        List<ReviewDto> review = lodgingMapper.reviewDetail(lodgingNum);
        lodgingMapper.reviewTotalCount(lodgingNum);
        return review;
    }


    @Override
    public List<ComfortsDto> comfortsDetail(String lodgingNum) throws Exception {
        List<ComfortsDto> comforts = lodgingMapper.comfortsDetail(lodgingNum);
        return comforts;
    }

    @Override
    public MembersDto membersDetail(String userId) throws Exception {
        MembersDto members = lodgingMapper.membersDetail(userId);
        return members;
    }

}
