package com.bearbnb.controller;

import com.bearbnb.dto.EmailDto;
import com.bearbnb.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController


public class EmailController {

    @Autowired
    EmailService emailService;


//  호스트에게 연락하기(글, 제목 모두 보냄)
    @RequestMapping(value = "/sendContactHost", method = RequestMethod.POST)
    public void sendContactHost(@RequestBody EmailDto emailDto) throws Exception{
        System.out.println(emailDto);
        emailService.sendContactHost(emailDto);
    }

//    숙소 예약시 호스트에게 연락하기
@RequestMapping(value = "/paymentEmail", method = RequestMethod.POST)
public void paymentEmail(@RequestBody EmailDto emailDto) throws Exception{
    System.out.println(emailDto);
    emailService.paymentEmail(emailDto);
}


}
