package com.bearbnb.service;

import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.PhotoDto;

import java.util.List;

public interface PhotoService {

    List<PhotoDto> lodgingPhotoList(String lodgingNum) throws Exception;

    List<PhotoDto> lodgingDetailImage(String idx) throws Exception;

    List<PhotoDto> mainImage(String lodgingNum) throws Exception;

}
