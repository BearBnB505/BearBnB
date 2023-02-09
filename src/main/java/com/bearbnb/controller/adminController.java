package com.bearbnb.controller;

import com.bearbnb.dto.*;
import com.bearbnb.mapper.AdminMapper;
import com.bearbnb.service.AdminService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class adminController {
    @Autowired
    AdminMapper adminMapper;

    @Autowired
    AdminService adminService;

    @RequestMapping(value = "admin")
    public Map<String, Object> memberList(@RequestParam(required = false, value = "pageNum", defaultValue = "1") int pageNum) throws Exception {

        PageInfo<MembersDto> page = new PageInfo<>(adminService.getMemberPaging(pageNum), 10);

        Map<String, Object> map = new HashMap<String, Object>();

        map.put("page", page);
        map.put("currentPage", page.getPageNum());
        map.put("firstPage", page.getNavigateFirstPage());
        map.put("lastPage", page.getNavigateLastPage());

        return map;
    }


    @RequestMapping(value = "admin/lodging/detail2/{lodgingNum}", method = RequestMethod.GET)
    public Map<String, Object> adminLodgingDetail(@PathVariable("lodgingNum") String lodgingNum) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();

        LodgingDto lodging = adminService.adminLodgingDetail(lodgingNum);
        map.put("lodging", lodging);

        List<ComfortsDto> comfort = adminService.adminComfortsDetail(lodging.getLodgingNum());
        map.put("comfort", comfort);

        return map;
    }

    @RequestMapping(value = "adminLodgingList", method = RequestMethod.GET)
    public Map<String, Object> adminLodgingList() throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        List<LodgingDto> lodging = adminService.adminLodgingList();
        map.put("lodging", lodging);

        List<ReviewDto> review = adminService.adminReviewList();
        map.put("review", review);

        List<ComplainDto> complain = adminService.adminComplainList();
        map.put("complain", complain);

        return map;

    }


//    @RequestMapping(value = "adminLodgingList")
//    public List<LodgingDto> lodgingList() {
//        return adminMapper.lodgingList();
//    }

    @RequestMapping(value = "adminComplainList")
    public List<ComplainDto> complainList() {
        return adminMapper.complainList();
    }

    @RequestMapping(value = "adminBookingList")
    public List<BookingDto> bookingList() {
        return adminMapper.bookingList();
    }


}
