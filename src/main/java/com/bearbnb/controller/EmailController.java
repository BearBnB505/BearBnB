package com.bearbnb.controller;

import com.bearbnb.dto.EmailDto;
import com.bearbnb.dto.LodgingDto;
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

//    호스트가 숙소 예약 승인 시 고객에게 연락
    @RequestMapping(value = "/UpdateRejectStateMail", method = RequestMethod.POST)
    public void UpdateRejectStateMail(@RequestBody EmailDto emailDto) throws Exception{
        System.out.println(emailDto);
        emailService.UpdateRejectStateMail(emailDto);
    }






    //    호스트가 숙소 예약 거절 시 고객에게 연락
    @RequestMapping(value = "/rejectGuestMail", method = RequestMethod.POST)
    public void rejectGuestMail(@RequestBody EmailDto emailDto) throws Exception{
        System.out.println(emailDto);
        emailService.rejectGuestMail(emailDto);
    }



//    관리자페이지
//    숙소 승인 누르면 승인완료로 만들기
    @RequestMapping(value = "/approveLodging", method = RequestMethod.POST)
    public void approveLodging(@RequestBody LodgingDto lodging) throws Exception{
    System.out.println(lodging);
    emailService.approveLodging(lodging.getLodgingNum());
//    emailService.approveLodging(lodgingNum);
}


//    관리자가 숙소 승인하면 호스트에게 연락
    @RequestMapping(value = "/approveLodgingEmail", method = RequestMethod.POST)
    public void approveLodgingEmail(@RequestBody EmailDto emailDto) throws Exception{
        System.out.println(emailDto);
        emailService.approveLodgingEmail(emailDto);
    }


//    관리자가 승인 반려누르면 db update 되게
@RequestMapping(value = "/rejectLodging", method = RequestMethod.POST)
public void rejectLodging(@RequestBody LodgingDto lodging) throws Exception {
    System.out.println(lodging);
    emailService.rejectLodging(lodging.getLodgingNum());
//    emailService.approveLodging(lodgingNum);
}
    @RequestMapping(value = "/rejectLodgingEmail", method = RequestMethod.POST)
    public void rejectLodgingEmail(@RequestBody EmailDto emailDto) throws Exception{
        System.out.println(emailDto);
        emailService.rejectLodgingEmail(emailDto);
    }

}
