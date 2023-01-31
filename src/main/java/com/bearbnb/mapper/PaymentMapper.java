package com.bearbnb.mapper;

import com.bearbnb.dto.BookingDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PaymentMapper {
    public void paymentInsert (String userId, String lodgingNum, String bookNum, String payType, int payCost, String bookState, String bookCheckInDt, String bookCheckOutDt, int adultNum, int babyNum, int petNum) throws Exception;
}
