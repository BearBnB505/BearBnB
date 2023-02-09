package com.bearbnb.controller;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.dto.ComplainDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class adminController {
    @Autowired
    AdminMapper adminMapper;

    @RequestMapping(value="adminMemberList")
    public List<MembersDto> memberList(){ return adminMapper.memberList(); }

    @RequestMapping(value = "adminLodgingList")
    public List<LodgingDto> lodgingList(){return adminMapper.lodgingList();}

    @RequestMapping(value = "adminComplainList")
    public List<ComplainDto> complainList(){return adminMapper.complainList();}

//    신고자 정보 호출
//    신고자 userid필요

    @RequestMapping(value = "complainUserInfo", method = RequestMethod.GET)
    public ComplainDto complainUserInfo(@RequestParam("userId") String userId) {
        // 서비스에 연결하여 매개변수로 받아온 사용자 정보를 DB에서 조회하여 가져옴
        
//        DB에서 가져온 정보를 클라이언트로 리턴
        return "test1"; 
    }

    @RequestMapping(value = "adminBookingList")
    public List<BookingDto> bookingList(){return adminMapper.bookingList();}
}
