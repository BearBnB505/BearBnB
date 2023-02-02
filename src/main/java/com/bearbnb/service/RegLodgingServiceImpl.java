package com.bearbnb.service;

import com.bearbnb.mapper.RegLodgingMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegLodgingServiceImpl implements RegLodgingService {

    @Autowired
    RegLodgingMapper regLodgingMapper;

    @Override
    public List<String> lodgingImageUrl() throws Exception{
        List<String> list = null;
        list = regLodgingMapper.lodgingImageUrl();
        return list;
    }
}
