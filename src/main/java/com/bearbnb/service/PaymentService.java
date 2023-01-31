package com.bearbnb.service;

import com.bearbnb.dto.BookingDto;
import org.springframework.stereotype.Service;


public interface PaymentService {
//    void paymentInsert () throws Exception;

    void paymentInsert(String userId, String lodgingNum, String bookNum, String payType, int payCost, String bookState, String bookCheckInDt, String bookCheckOutDt, int adultNum, int babyNum, int petNum) throws Exception;
}
