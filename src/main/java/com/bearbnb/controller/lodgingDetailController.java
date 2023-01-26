package com.bearbnb.controller;

import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.ReviewDto;
import com.bearbnb.service.LodgingDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class lodgingDetailController {

    @Autowired
    LodgingDetailService lodgingDetailService;

//    @RequestMapping(value = "lodgingDetail/{idx}", method = RequestMethod.GET)
//    public ModelAndView lodgingDetail(@PathVariable("idx") int idx) throws Exception {
//
//        ModelAndView mv = new ModelAndView("lodgingDetail");
//
//        LodgingDto lodging = lodgingDetailService.lodgingDetail(idx);
//        mv.addObject("lodging", lodging);
//
//        return mv;
//    }

    @RequestMapping(value = "lodgingDetail/{idx}", method = RequestMethod.GET)
    public LodgingDto lodgingDetail(@PathVariable("idx") int idx) throws Exception {
        return lodgingDetailService.lodgingDetail(idx);
    }

    @RequestMapping(value = "lodgingDetail/{idx}", method = RequestMethod.GET)
    public ReviewDto reviewDetail(@PathVariable("idx") int idx) throws Exception {
        return lodgingDetailService.reviewDetail(idx);
    }

}

