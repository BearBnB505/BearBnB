package com.bearbnb.controller;

import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.mapper.LodgingMapper;
import com.bearbnb.mapper.ComfortMapper;
import com.bearbnb.service.HostUpdateService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@ComponentScan(basePackages = {"com.bearbnb.service.HostUpdateService"})
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class HostInfoController {


    @Autowired
    LodgingMapper CallLodgingMapper;
    @Autowired
    ComfortMapper comfortMapper;
    @Autowired
    private HostUpdateService hostUpdateService;


    @RequestMapping(value = "/UpdateLanguage", method = RequestMethod.PUT)
    public String UpdateLanguage(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateLanguage(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateIntroHost", method = RequestMethod.PUT)
    public String UpdateIntroHost(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateIntroHost(lodging);

        return "redirect:/UpdateLodgingList";
    }



}

