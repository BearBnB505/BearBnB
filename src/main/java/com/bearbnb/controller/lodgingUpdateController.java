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
public class lodgingUpdateController {


    @Autowired
    LodgingMapper CallLodgingMapper;
    @Autowired
    ComfortMapper comfortMapper;
    @Autowired
    private HostUpdateService hostUpdateService;



    @RequestMapping(value = "CallLodgingList",method = RequestMethod.PUT)
    public List<LodgingDto> CallLodgingList(LodgingDto lodging) {
        return CallLodgingMapper.CallLodgingList(lodging);
    }

    @RequestMapping(value = "/AllLodgingList")
    public List<LodgingDto> AllLodgingList(LodgingDto lodging) {
        return CallLodgingMapper.AllLodgingList(lodging);
    }


    //페이지 헬퍼 쓴 페이지네이션
//    @RequestMapping(value = "/AllLodgingList")
//    public List<LodgingDto> AllLodgingList(@RequestParam(value = "pageNum", defaultValue = "1") int pageNum,
//                                           @RequestParam(value = "pageSize", defaultValue = "3") int pageSize) {
//        PageHelper.startPage(pageNum, pageSize);
//        List<LodgingDto> lodgingList = CallLodgingMapper.AllLodgingList();
//        PageInfo<LodgingDto> pageInfo = new PageInfo<>(lodgingList);
//
//        return lodgingList;
//    }










//페이지네이션 발버둥
//    @RequestMapping(value = "/AllLodgingList")
//    public List<LodgingDto> AllLodgingList(@RequestParam(required = false, defaultValue = "1") int pageNum) {
//        PageInfo<LodgingDto> pageList = new PageInfo<>(hostUpdateService.selectPageList(pageNum),5);
//        return CallLodgingMapper.AllLodgingList("pageList",pageList);
//    }


//    @RequestMapping(value = "CallLodgingList")
//    public List<LodgingDto> CallLodgingList() {
//        return CallLodgingMapper.CallLodgingList();
//    }

    @RequestMapping(value = "/comfortList" ,method = RequestMethod.PUT)
    public List<ComfortsDto> comfortList(LodgingDto lodging) {
        return comfortMapper.comfortList(lodging);
    }


    @RequestMapping(value = "/UpdateLodgingName", method = RequestMethod.PUT)
    public String UpdateLodgingList(LodgingDto lodging) throws Exception {
        hostUpdateService.hostLodgingUpdate(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateLodgingIntro", method = RequestMethod.PUT)
    public String UpdateLodgingIntro(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateLodgingIntro(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateCapacity", method = RequestMethod.PUT)
    public String UpdateCapacity(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateCapacity(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateLodgingConcept", method = RequestMethod.PUT)
    public String UpdateLodgingConcept(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateLodgingConcept(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateLodgingBedNBath", method = RequestMethod.PUT)
    public String UpdateLodgingBedNBath(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateLodgingBedNBath(lodging);

        return "redirect:/UpdateLodgingList";
    }




    @RequestMapping(value = "/UpdateComfortsList", method = RequestMethod.PUT)
    public List<ComfortsDto> UpdateComfortsList(@RequestBody List<ComfortsDto> ComfortBox ){

        System.out.println(ComfortBox);
        hostUpdateService.UpdateComfortsList(ComfortBox);

        return ComfortBox;
    }


}

