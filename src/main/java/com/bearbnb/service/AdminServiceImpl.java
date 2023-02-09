package com.bearbnb.service;

import com.bearbnb.dto.*;
import com.bearbnb.mapper.AdminMapper;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService{

    @Autowired
    private AdminMapper adminMapper;

    @Override
    public List<MembersDto> memberList() throws Exception {
        return adminMapper.memberList();
    }

    @Override
    public Page<MembersDto> getMemberPaging(int pageNum) throws Exception {
        PageHelper.startPage(pageNum, 10);
        return adminMapper.getMembersPaging(pageNum);
    }

    @Override
    public LodgingDto adminLodgingDetail(String lodgingNum) throws Exception {
        return adminMapper.adminLodgingDetail(lodgingNum);
    }
    @Override
    public List<ComfortsDto> adminComfortsDetail(String lodgingNum) throws Exception {
        return adminMapper.adminComfortsDetail(lodgingNum);
    }


}
