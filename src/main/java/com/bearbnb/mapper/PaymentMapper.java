package com.bearbnb.mapper;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.dto.LodgingDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PaymentMapper {
    public void paymentInsert (String userId, String lodgingNum, String bookNum, String payType, int payCost, String bookState, String bookCheckInDt, String bookCheckOutDt, int adultNum, int babyNum, int petNum) throws Exception;

    List<LodgingDto> paymentLodgingInfoList();

}
