package com.bearbnb.controller;

import com.bearbnb.dto.*;
import com.bearbnb.mapper.LodgingMapper;
import com.bearbnb.mapper.MemberMapper;
import com.bearbnb.mapper.MembersMapper;
import com.bearbnb.service.LodgingDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class MembersController {
    @Autowired
    MembersMapper membersMapper;

    @RequestMapping(value = "/CallMember")
    public List<MembersDto> CallMember() {
        return membersMapper.CallMember();
    }


}

