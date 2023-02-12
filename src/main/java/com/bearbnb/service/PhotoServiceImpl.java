package com.bearbnb.service;

import com.bearbnb.dto.PhotoDto;
import com.bearbnb.mapper.PhotoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotoServiceImpl implements PhotoService{

    @Autowired
    PhotoMapper photoMapper;

//  숙소 수정페이지
    @Override
    public List<PhotoDto> lodgingPhotoList(String lodgingNum) throws Exception {
        return photoMapper.lodgingPhotoList(lodgingNum);
    }
//    숙소 상세페이지
    @Override
    public List<PhotoDto> lodgingDetailImage(String idx) throws Exception {
        return photoMapper.lodgingDetailImage(idx);
    }
}
