package com.bearbnb.controller;

import com.bearbnb.dto.MembersDto;
import com.bearbnb.service.JoinService;
//import com.bearbnb.service.MailSendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class JoinController {
    @Autowired
    JoinService joinService;


    @RequestMapping(value = "/insertJoin", method = RequestMethod.POST)
    public String insertLodgingTable(@RequestBody MembersDto members) throws Exception{
        joinService.insertJoin(members);

//        System.out.println(members);

        return null;
    }

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
    public String emilCode(@RequestParam String userId) throws Exception{
        System.out.println("emailcode");
        System.out.println(userId);
        joinService.sendSimpleMessage(userId);


        return code;
    }




}