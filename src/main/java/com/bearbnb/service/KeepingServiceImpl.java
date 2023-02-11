package com.bearbnb.service;
import com.bearbnb.dto.*;
import com.bearbnb.mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KeepingServiceImpl implements KeepingService{
    @Autowired
    private KeepingMapper keepingMapper;

//    @Override
//    public List<KeepingDto> KeepList() {
//        List<KeepingDto> parsingK = keepingMapper.KeepList();
//            List<ZZIMDTO> 변수명 = new 최종적으로 보낼 리스트
//
//        for(KeepingDto kp : parsingK){
//            ReviewAvgDto reviewAvgDto = KeepingMapper.getAVG(kp.getLodgingNum());
//            DTO 생성하셔서원하는 데이터만 넣기
//            ZZIMDTO zzimdto = new ZZimDTO;
//            zzimdto.set(kp.getLodgingName());
//            zzimdto.set(kp.getAddr());
//            zzimdto.set(kp.get(이미지));
//            zzimdto.set(reviewAvgDto.getReviewCount());
//            zzimdto.set(reviewAvgDto.getReviewTotal());
//
//                    변수명.add(zzimdto);
//        }
//
//
//        return null;
//    }

    @Override
    public List<KeepingDto> KeepList() {
        return keepingMapper.KeepList();
    }

    @Override
    public List<ReviewAvgDto> LodgingAvg(String lodgingNum) {
        ReviewAvgDto avg = keepingMapper.reviewAvg(lodgingNum);
        return (List<ReviewAvgDto>) avg;
    }

    @Override
    public ReviewAvgDto reviewAvg(String lodgingNum) {
        ReviewAvgDto avg = keepingMapper.reviewAvg(lodgingNum);
        return avg;
    }



//    @Override
//    public List<ReviewAvgDto> LodgingAvg(String reviewAvg) {
//        return keepingMapper.LodgingAvg();
//    }


//    @Override
//    public ReviewAvgDto reviewAvg(String lodgingNum) throws Exception {
//        ReviewAvgDto avg = lodgingMapper.reviewAvg(lodgingNum);
//        return avg;
//    }


//    @Override
//    public List<KeepInfoDto> KeepList() {
//       List<KeepingDto> keepInfo =keepingMapper.KeepList();
////        List<KeepInfoDto> keepInfoList = new ArrayList<KeepInfoDto>();
//        List<KeepInfoDto> keepInfoList = new ArrayList<KeepInfoDto>();
//
//        for(KeepingDto keepInfoBox : keepInfo){
//           ReviewAvgDto reviewAvg = KeepingMapper.CallReviewAvg(keepInfoBox.getLodgingNum());
//
//            keepInfoList.add(new KeepInfoDto(keepInfoBox.getLodgingName(), keepInfoBox.getPhoto(), keepInfoBox.getAddr(), reviewAvg.getReviewCount(), reviewAvg.getReviewTotal()));
//       }
//
//
//
//        return keepInfoList;
//    }


    }

