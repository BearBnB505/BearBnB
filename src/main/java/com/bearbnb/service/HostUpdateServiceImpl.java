package com.bearbnb.service;

import com.bearbnb.mapper.LodgingMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bearbnb.dto.LodgingDto;

@Service
public class HostUpdateServiceImpl implements HostUpdateService{
    @Autowired
    private LodgingMapper lodgingMapper;

    @Override
    public void hostLodgingUpdate(LodgingDto lodging) throws Exception{
//        LodgingDto lodgingUpdate = new LodgingDto();
//        lodgingUpdate.setLodgingName(lodgingName);

        lodgingMapper.hostLodgingUpdate(lodging);
    }
}
