package com.bearbnb.service;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.dto.LodgingDto;
import org.springframework.stereotype.Service;

import java.util.List;


public interface PaymentService {
//    void paymentInsert () throws Exception;

    void paymentInsert(String userId, String lodgingNum, String bookNum, String payType, int payCost, String bookState, String bookCheckInDt, String bookCheckOutDt, int adultNum, int babyNum, int petNum) throws Exception;

}
