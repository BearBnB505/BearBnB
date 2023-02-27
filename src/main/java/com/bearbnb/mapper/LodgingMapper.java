package com.bearbnb.mapper;

import com.bearbnb.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface LodgingMapper {

//    List<LodgingDto> lodgingList();
    List<LodgingDto> lodgingList(String category);

    List<LodgingDto> AllLodgingList(LodgingDto lodging);
    List<LodgingDto> CallLodgingList(LodgingDto lodging);

    LodgingDto lodgingDetail(int idx) throws Exception;

    List<PhotoDto> photoDetail(String lodgingNum) throws Exception;

    List<ReviewDto> reviewDetail(String lodgingNum) throws Exception;

    List<ComfortsDto> comfortsDetail(String lodgingNum) throws Exception;

    MembersDto membersDetail(String userId) throws Exception;

    void reviewTotalCount(String lodgingNum) throws Exception;
    void hostLodgingUpdate(LodgingDto lodging);

    void LodgingIntroUpdate(LodgingDto lodging);

    void LodgingConceptUpdate(LodgingDto lodging);

    void LodgingBedNBathUpdate(LodgingDto lodging);

    void CapacityUpdate(LodgingDto lodging);

    ReviewAvgDto reviewAvg(String lodgingNum) throws Exception;

    List<LodgingDto> searchLodgingList(String searchSpot, String startDt, String endDt, int adultCount) throws Exception;

    void LanguageUpdate(LodgingDto lodging);

    void IntroHostUpdate(LodgingDto lodging);

}
