package com.bearbnb.service;
import com.bearbnb.dto.*;
import com.bearbnb.mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KeepingServiceImpl implements KeepingService{
    @Autowired
    private KeepingMapper keepingMapper;

    @Override
    public List<KeepingDto> KeepList() {
        return keepingMapper.KeepList();
    }
}
