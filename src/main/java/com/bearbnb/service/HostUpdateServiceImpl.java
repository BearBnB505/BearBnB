package com.bearbnb.service;

import com.bearbnb.mapper.LodgingMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bearbnb.dto.LodgingDto;

@Service
public class HostUpdateServiceImpl implements HostUpdateService{
    @Autowired
    LodgingMapper lodgingMapper;

    @Override
    public String hostLodgingUpdate(String lodgingName) throws Exception{
        LodgingDto lodgingUpdate = new LodgingDto();
        lodgingUpdate.setLodgingName(lodgingName);

        lodgingMapper.lodgingUpdate(lodgingUpdate);
        return lodgingName;
    }
}
