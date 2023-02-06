package com.bearbnb.controller;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.dto.ComplainDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @RequestMapping(value = "adminBookingList")
    public List<BookingDto> bookingList(){return adminMapper.bookingList();}
}
