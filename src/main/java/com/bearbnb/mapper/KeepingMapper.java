package com.bearbnb.mapper;
import com.bearbnb.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface KeepingMapper {


    static ReviewAvgDto CallReviewAvg(String lodgingNum) {
        return CallReviewAvg(lodgingNum);
    }

    List<KeepingDto> KeepList();

    List<KeepInfoDto> keepInfoList();

    List<ReviewAvgDto> LodgingAvg(String lodgingNum);

    void ReviewAvgDto  (String lodgingNum);

    ReviewAvgDto reviewAvg(String lodgingNum);
}
