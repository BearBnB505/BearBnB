package com.bearbnb.controller;

import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.service.JoinService;
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
//        regLodgingService.insertLodgingTable(lodging);
}