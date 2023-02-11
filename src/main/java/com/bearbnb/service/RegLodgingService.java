package com.bearbnb.service;

import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.PhotoDto;

import java.util.List;

public interface RegLodgingService {
//    List<String> lodgingImageUrl() throws Exception;
//
    LodgingDto insertLodgingTable(LodgingDto lodging) throws Exception;


//  void insertCategory(String data) throws Exception;
    void insertCategory(List<ComfortsDto> dataList) throws Exception;
//    void insertUrl(String data) throws Exception;

    void insertUrl(List<PhotoDto> photoList) throws Exception;


//    호스트로 업데이트
    void updateAuthority(String userId) throws Exception;

    String checkAuthority(String userId) throws Exception;
}
