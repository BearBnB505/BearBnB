package com.bearbnb.controller;

import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.mapper.LodgingMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class mainController {

    @Autowired
    LodgingMapper lodgingMapper;

//    @RequestMapping("/")
//    public String index() throws Exception {
//        return "Hello World";
//    }

    @RequestMapping("test")
    public List<String> test() throws Exception {
        List<String> test = new ArrayList<>();
        test.add("테스트");
        test.add("스프링 내부 리액트 연동");
        return test;
    }

    @RequestMapping("/user")
    public String user() {
        return "user";
    }

    @RequestMapping(value = "/lodgingList", method = RequestMethod.GET)
    public List<LodgingDto> lodgingList(@RequestParam("category") String category) {

        return lodgingMapper.lodgingList(category);
    }

    @RequestMapping(value = "/searchLodgingList", method = RequestMethod.GET)
    public List<LodgingDto> searchLodgingList(@RequestParam("searchSpot") String searchSpot, @RequestParam("startDt") String startDt, @RequestParam("endDt") String endDt, @RequestParam("adultCount") int adultCount) throws Exception {
        return lodgingMapper.searchLodgingList(searchSpot, startDt, endDt, adultCount);
    }


}
