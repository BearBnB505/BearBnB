package com.bearbnb.controller;

import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.PhotoDto;
import com.bearbnb.mapper.PhotoMapper;
import com.bearbnb.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class PhotoController {

    @Autowired
    PhotoService photoService;
    @Autowired
    PhotoMapper photoMapper;

//    숙소 수정페이지 이미지 불러오기
    @RequestMapping(value = "/lodgingPhotoList", method = RequestMethod.PUT)
    public List<PhotoDto> lodgingPhotoList(@RequestParam("lodgingNum") String lodgingNum) throws Exception {

        return  photoService.lodgingPhotoList(lodgingNum);
    }

//    숙소 상세페이지 이미지 불러오기
    @RequestMapping(value = "/lodgingDetailImage", method = RequestMethod.PUT)
    public List<PhotoDto> lodgingDetailImage(@RequestParam("idx") String idx) throws Exception {
//        System.out.println(idx);
        return  photoService.lodgingDetailImage(idx);
    }

//    메인페이지 이미지 불러오기
    @RequestMapping(value = "/mainImage", method = RequestMethod.PUT)
    public List<PhotoDto> mainImage(@RequestParam("lodgingNum") String lodgingNum) throws Exception {
//        System.out.println(lodgingNum);
        return  photoService.mainImage(lodgingNum);
    }
}
