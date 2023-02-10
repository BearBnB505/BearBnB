package com.bearbnb.controller;

import com.bearbnb.dto.MembersDto;
//import com.bearbnb.service.EmailService;
import com.bearbnb.service.JoinService;
//import com.bearbnb.service.MailSendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class JoinController {
    @Autowired
    JoinService joinService;

//    @Autowired
//    EmailService emailService;



//    @Autowired
//    MailSendService mailSendService;

    @RequestMapping(value = "/insertJoin", method = RequestMethod.POST)
    public String insertLodgingTable(@RequestBody MembersDto members) throws Exception{
        joinService.insertJoin(members);

//        System.out.println(members);

        return null;
    }
//        regLodgingService.insertLodgingTable(lodging);

//    @RequestMapping(value = "/emailCheck", method = RequestMethod.GET)
//    public String emailCheck(@RequestParam String userId) throws Exception{
//        System.out.println(userId);
//
////        String result = joinService.emailCheck(userId);
////
////        return result;
//        return "1";
//    }

//    이메일 중복 체크
    @RequestMapping(value = "/emailCheck", method = RequestMethod.GET)
    public int emailCheck(@RequestParam String userId) throws Exception {
        System.out.println(userId);
        int result = joinService.emailCheck(userId);
//        String authKey = mailSendService.sendAuthMail(userId);

        return result;
    }

//    이메일 인증 문자 보내기
    @RequestMapping(value = "/emailCode", method = RequestMethod.GET)
    public String emilCode(@RequestParam String email) throws Exception{
        System.out.println("인증 번호 보낼 이메일");
        System.out.println(email);
//        String confirm = emailService.sendSimpleMessage(email);

        return null;
    }


}