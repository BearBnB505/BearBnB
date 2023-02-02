package com.bearbnb.mapper;

import com.bearbnb.dto.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface LodgingMapper {
    List<LodgingDto> lodgingList();

    LodgingDto lodgingDetail(int idx) throws Exception;

    List<PhotoDto> photoDetail(String lodgingNum) throws Exception;

    List<ReviewDto> reviewDetail(String lodgingNum) throws Exception;

    List<ComfortsDto> comfortsDetail(String lodgingNum) throws Exception;

    MembersDto membersDetail(String userId) throws Exception;

    ReviewDto reviewAvg(String lodgingNum) throws Exception;
}
