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


    @Override
    public List<PhotoDto> lodgingPhotoList(String lodgingNum) throws Exception {
        return photoMapper.lodgingPhotoList(lodgingNum);
    }
}
