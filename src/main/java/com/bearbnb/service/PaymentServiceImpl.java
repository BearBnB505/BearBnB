package com.bearbnb.service;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.mapper.PaymentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    PaymentMapper paymentMapper;

    @Override
    public void paymentInsert(String userId, String lodgingNum, String bookNum, String payType, int payCost, String bookState, String bookCheckInDt, String bookCheckOutDt, int adultNum, int babyNum, int petNum) throws Exception {
        paymentMapper.paymentInsert(userId,lodgingNum,bookNum,payType,payCost,bookState,bookCheckInDt,bookCheckOutDt,adultNum,babyNum,petNum);
    }
}
