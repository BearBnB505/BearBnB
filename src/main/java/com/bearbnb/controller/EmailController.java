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



    @RequestMapping(value = "/sendContactHost", method = RequestMethod.POST)
    public void sendContactHost(@RequestBody EmailDto emailDto) throws Exception{
        System.out.println(emailDto);
        emailService.sendContactHost(emailDto);
    }

}
