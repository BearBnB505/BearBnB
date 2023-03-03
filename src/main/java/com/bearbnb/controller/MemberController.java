package com.bearbnb.controller;

import com.bearbnb.dto.*;
import com.bearbnb.mapper.KeepingMapper;
import com.bearbnb.mapper.MemberMapper;
import com.bearbnb.mapper.ReviewMapper;
import com.bearbnb.service.KeepingService;

import com.bearbnb.dto.MemberResponseDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.jwt.JwtTokenProvider;

import com.bearbnb.service.MemberService;
import com.bearbnb.service.MembersService;
import com.bearbnb.service.ReviewService;
import com.bearbnb.mapper.*;
import com.bearbnb.service.*;
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
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    MemberMapper memberMapper;
    @Autowired
    ReviewMapper reviewMapper;
    @Autowired
    KeepingMapper keepingMapper;
    @Autowired
    BookingMapper bookingMapper;
    @Autowired
    MembersService membersService;
    @Autowired
    ReviewService reviewService;
    @Autowired
    KeepingService keepingService;

    @Autowired
    BookingService bookingService;


    @GetMapping("/member/my")
    public ResponseEntity<MemberResponseDto> getMyMemberInfo() {
        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
//        System.out.println(myInfoBySecurity.getNickname());

        return ResponseEntity.ok((myInfoBySecurity));
        // return ResponseEntity.ok(memberService.getMyInfoBySecurity());
    }

    @RequestMapping(value = "/Members", method = RequestMethod.PUT)
    public List<MembersDto> MemberList(@RequestParam("userId") String userId) {
        return memberMapper.MemberList(userId);
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
    public List<ReviewDto> MemberReviewList(MembersDto members) {
        return reviewMapper.MemberReviewList(members);
    }

    @RequestMapping(value = "/KeepList")
    public List<KeepingDto> KeepList(KeepingDto keeping) {
        return keepingService.KeepList(keeping);
    }

    @RequestMapping(value = "/cancelList")
    public List<BookingDto> cancelList(BookingDto booking) {
        return bookingService.cancelList(booking);
    }



    @RequestMapping(value = "/LodgingAvg", method = RequestMethod.GET)
    public Map<String, Object> lodgingDetail(@RequestParam("lodgingNum") String lodgingNum) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        ReviewAvgDto avg = keepingService.reviewAvg(lodgingNum);
        map.put("avg", avg);
        return map;
    }

    @RequestMapping(value = "/complainList")
    public List<ComplainDto> complainList(ComplainDto complain) {
        return memberMapper.complainList(complain);
    }

    @RequestMapping(value = "/allReviewList")
    public List<ReviewDto> allReviewList() {
        return reviewMapper.allReviewList();
    }

    @RequestMapping(value = "/imgList")
    public List<PhotoDto> imgList(PhotoDto photo) {
        return memberMapper.imgList(photo);
    }


    @RequestMapping(value = "/complainDelete", method = RequestMethod.PUT)
    public List<ComplainDto> complainDelete(@RequestBody List<ComplainDto> ComplainBox ){

//        System.out.println(ComplainBox);
        membersService.complainDelete(ComplainBox);

        return ComplainBox;
    }

    @RequestMapping(value = "/memberDelete", method = RequestMethod.PUT)
    public String memberDelete(MembersDto members) throws Exception {
        membersService.memberDelete(members);
        return "redirect:/memberDelete";
    }

    @RequestMapping(value = "/updateState", method = RequestMethod.PUT)
    public String updateState(BookingDto booking) throws Exception {
        bookingService.updateState(booking);
        return "redirect:/updateState";
    }



    @RequestMapping(value = "/writeReview", method = RequestMethod.PUT)
    public String writeReview(ReviewDto review) throws Exception {
        reviewService.writeReview(review);
        return "redirect:/writeReview";
    }


}