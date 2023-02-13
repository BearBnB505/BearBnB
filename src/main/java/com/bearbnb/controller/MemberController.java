package com.bearbnb.controller;

import com.bearbnb.dto.*;
import com.bearbnb.mapper.KeepingMapper;
import com.bearbnb.mapper.MemberMapper;
import com.bearbnb.mapper.MembersMapper;
import com.bearbnb.mapper.ReviewMapper;
import com.bearbnb.service.KeepingService;
import com.bearbnb.service.MemberService;
import com.bearbnb.service.MembersService;
import com.bearbnb.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequiredArgsConstructor
//@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;

    @Autowired
    MemberMapper memberMapper;
    @Autowired
    ReviewMapper reviewMapper;
    @Autowired
    KeepingMapper keepingMapper;
    @Autowired
    MembersService membersService;
    @Autowired
    ReviewService reviewService;
    @Autowired
    KeepingService keepingService;


    @GetMapping("/me")
    public ResponseEntity<MemberResponseDto> getMyMemberInfo() {
        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
//        System.out.println(myInfoBySecurity.getNickname());

        return ResponseEntity.ok((myInfoBySecurity));
        // return ResponseEntity.ok(memberService.getMyInfoBySecurity());
    }

//    @PostMapping("/nickname")
//    public ResponseEntity<MemberResponseDto> setMemberNickname(@RequestBody MemberRequestDto request) {
//        return ResponseEntity.ok(memberService.changeMemberNickname(request.getEmail(), request.getNickname()));
//    }
//
//    @PostMapping("/password")
//    public ResponseEntity<MemberResponseDto> setMemberPassword(@RequestBody ChangePasswordRequestDto request) {
//        return ResponseEntity.ok(memberService.changeMemberPassword(request.getExPassword(), request.getNewPassword()));
//    }


    @RequestMapping(value = "/Members")
    public List<MembersDto> MemberList() {
        return memberMapper.MemberList();
    }

    @RequestMapping(value = "/UpdateMemberName", method = RequestMethod.PUT)
    public String UpdateMemberName(MembersDto members) throws Exception {
        membersService.UpdateMemberName(members);

        return "redirect:/UpdateMemberName";
    }

    @RequestMapping(value = "/UpdateMemberTel", method = RequestMethod.PUT)
    public String UpdateMemberTel(MembersDto members) throws Exception {
        membersService.UpdateMemberTel(members);

        return "redirect:/UpdateMemberTel";
    }

    @RequestMapping(value = "/UpdateMemberPwd", method = RequestMethod.PUT)
    public String UpdateMemberPwd(MembersDto members) throws Exception {
        membersService.UpdateMemberPwd(members);

        return "redirect:/UpdateMemberPwd";
    }

    @RequestMapping(value = "/UpdateReview", method = RequestMethod.PUT)
    public String UpdateReview(ReviewDto review) throws Exception {
        reviewService.UpdateReview(review);

        return "redirect:/UpdateReview";
    }

    @RequestMapping(value = "/DeleteReview", method = RequestMethod.PUT)
    public String DeleteReview(ReviewDto review) throws Exception {
        reviewService.DeleteReview(review);

        return "redirect:/review";
    }

    @RequestMapping(value = "/MemberReviewList")
    public List<ReviewDto> MemberReviewList() {
        return reviewMapper.MemberReviewList();
    }

//    @RequestMapping(value = "/KeepList")
//    public List<KeepingDto> KeepList() {
//        return keepingService.KeepList();
//    }
    @RequestMapping(value = "/KeepList")
    public List<KeepingDto> KeepList() {
        return keepingService.KeepList();
    }

//    @RequestMapping(value = "/LodgingAvg")
//    public List<ReviewAvgDto> LodgingAvg(@RequestParam("lodging_num") String lodgingNum) {
//        return keepingService.LodgingAvg(lodgingNum);
//    }

    @RequestMapping(value = "/LodgingAvg", method = RequestMethod.GET)
    public Map<String, Object> lodgingDetail(@RequestParam("lodgingNum") String lodgingNum) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        ReviewAvgDto avg = keepingService.reviewAvg(lodgingNum);
        map.put("avg", avg);


        return map;
    }

    @RequestMapping(value = "/complainList")
    public List<ComplainDto> complainList() {
        return memberMapper.complainList();
    }



    @RequestMapping(value = "/complainDelete", method = RequestMethod.PUT)
    public String deleteComplain(ComplainDto complain) throws Exception {
        membersService.deleteComplain(complain);
        return "redirect:/deleteComplain";
    }



}