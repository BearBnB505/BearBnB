package com.bearbnb.controller;

import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.mapper.LodgingMapper;
import com.bearbnb.mapper.ComfortMapper;
import com.bearbnb.service.HostUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@ComponentScan(basePackages = {"com.bearbnb.service.HostUpdateService"})
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class lodgingUpdateController {


    @Autowired
    LodgingMapper CallLodgingMapper;
    @Autowired
    ComfortMapper comfortMapper;
    @Autowired
    private HostUpdateService hostUpdateService;



    @RequestMapping(value = "CallLodgingList")
    public List<LodgingDto> CallLodgingList() {
        return CallLodgingMapper.CallLodgingList();
    }

    @RequestMapping(value = "/comfortList")
    public List<ComfortsDto> comfortList() {return comfortMapper.comfortList();}


    @RequestMapping(value = "/UpdateLodgingName", method = RequestMethod.POST)
    public String UpdateLodgingList(LodgingDto lodging) throws Exception {
        hostUpdateService.hostLodgingUpdate(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateLodgingIntro", method = RequestMethod.POST)
    public String UpdateLodgingIntro(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateLodgingIntro(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateLodgingConcept", method = RequestMethod.POST)
    public String UpdateLodgingConcept(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateLodgingConcept(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateLodgingBedNBath", method = RequestMethod.POST)
    public String UpdateLodgingBedNBath(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateLodgingBedNBath(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateLodgingAmenity", method = RequestMethod.POST)
    public String UpdateLodgingAmenity(LodgingDto lodging) throws Exception{
        hostUpdateService.UpdateLodgingAmenity(lodging);
        return "redirect:/UpdateLodgingList";
    }




}

