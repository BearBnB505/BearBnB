package com.bearbnb.service;

import com.bearbnb.dto.LodgingDto;

import java.util.List;

public interface RegLodgingService {
    List<String> lodgingImageUrl() throws Exception;

    LodgingDto insertLodgingTable(Object obj) throws Exception;
}
