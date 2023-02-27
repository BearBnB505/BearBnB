package com.bearbnb.controller;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.mapper.LodgingMapper;
import com.bearbnb.mapper.PaymentMapper;
import com.bearbnb.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.awt.print.Book;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class PaymentController {
    @Autowired
    PaymentService paymentService;

    @Autowired
    PaymentMapper paymentMapper;


    @RequestMapping(value = "/paymentInsert", method = RequestMethod.POST)
    public void paymentInsert(
            @RequestParam("userId") String userId,
            @RequestParam("lodgingNum") String lodgingNum,
            @RequestParam("bookNum") String bookNum,
            @RequestParam("payType") String payType,
            @RequestParam("payCost") int payCost,
            @RequestParam("bookState") String bookState,
            @RequestParam("bookCheckInDt") String bookCheckInDt,
            @RequestParam("bookCheckOutDt") String bookCheckOutDt,
            @RequestParam("adultNum") int adultNum,
            @RequestParam("babyNum") int babyNum,
            @RequestParam("petNum") int petNum) throws Exception {
//        System.out.println(userId);
//        System.out.println(lodgingNum);
//        System.out.println(bookNum);
//        System.out.println(payType);
//        System.out.println(payCost);
//        System.out.println(bookState);
//        System.out.println(bookCheckInDt);
//        System.out.println(bookCheckOutDt);
//        System.out.println(adultNum);
//        System.out.println(babyNum);
//        System.out.println(petNum);

        paymentService.paymentInsert(userId,lodgingNum,bookNum,payType,payCost,bookState,bookCheckInDt,bookCheckOutDt,adultNum,babyNum,petNum);

    }

//    @RequestMapping("/paymentInsert" method = RequestMethod.POST)
//    public void paymentInsert(@RequestBody BookingDto booking) throws Exception{
//        System.out.println(booking);
//    }


    @RequestMapping(value = "/paymentLodgingInfoList")
    public List<LodgingDto> paymentLodgingInfoList(){
        return paymentMapper.paymentLodgingInfoList();
    }

}



