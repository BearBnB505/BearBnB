package com.bearbnb.service;

import com.bearbnb.dto.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LodgingDetailService {

    LodgingDto lodgingDetail(int idx) throws Exception;

    List<PhotoDto> photoDetail(String lodgingNum) throws Exception;

    List<ReviewDto> reviewDetail(String lodgingNum) throws Exception;

    List<ComfortsDto> comfortsDetail(String lodgingNum) throws Exception;

    MembersDto membersDetail(String userId) throws Exception;

    ReviewDto reviewAvg(String lodgingNum) throws Exception;
}
