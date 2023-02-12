package com.bearbnb.controller;

import com.bearbnb.dto.MemberRequestDto;
import com.bearbnb.dto.MemberResponseDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.jwt.JwtTokenProvider;
import com.bearbnb.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    @GetMapping("/myPage")
    public String membersDto(String accessToken) {
        String userId = jwtTokenProvider.getAuthentication(accessToken).getName();
        return userId;
    }

    @GetMapping("/my")
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

}