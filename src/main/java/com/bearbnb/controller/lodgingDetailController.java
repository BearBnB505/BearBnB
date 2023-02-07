package com.bearbnb.controller;

import com.bearbnb.dto.*;
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
public class lodgingDetailController {

    @Autowired
    LodgingDetailService lodgingDetailService;

    @RequestMapping(value = "lodgingDetail/{idx}", method = RequestMethod.GET)
    public Map<String, Object> lodgingDetail(@PathVariable("idx") int idx) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        LodgingDto lodging = lodgingDetailService.lodgingDetail(idx);
        map.put("lodging", lodging);

        List<PhotoDto> photo = lodgingDetailService.photoDetail(lodging.getLodgingNum());
        map.put("photo", photo);

        List<ReviewDto> review = lodgingDetailService.reviewDetail(lodging.getLodgingNum());
        map.put("review", review);

        List<ComfortsDto> comforts = lodgingDetailService.comfortsDetail(lodging.getLodgingNum());
        map.put("comforts", comforts);

        MembersDto members = lodgingDetailService.membersDetail(lodging.getUserId());
        map.put("members", members);

        return map;
    }


}

