package com.bearbnb.mapper;

import com.bearbnb.dto.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface LodgingMapper {
    List<LodgingDto> lodgingList(String category);

    LodgingDto lodgingDetail(int idx) throws Exception;

    List<PhotoDto> photoDetail(String lodgingNum) throws Exception;

    List<ReviewDto> reviewDetail(String lodgingNum) throws Exception;

    List<ComfortsDto> comfortsDetail(String lodgingNum) throws Exception;

    MembersDto membersDetail(String userId) throws Exception;

    void reviewTotalCount(String lodgingNum) throws Exception;

    List<LodgingDto> searchLodgingList(String startDt, String endDt, int adultCount) throws Exception;
}
