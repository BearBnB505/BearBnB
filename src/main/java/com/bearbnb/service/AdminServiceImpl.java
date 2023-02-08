package com.bearbnb.service;

import com.bearbnb.dto.ComplainDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.dto.ReviewAvgDto;
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
    public LodgingDto adminLodgingList(String lodgingNum) throws Exception {
        return adminMapper.adminLodgingList(lodgingNum);
    }
    public List<ReviewAvgDto> adminAvgReviewList(String lodgingNum) throws Exception {
        return adminMapper.adminAvgReviewList(lodgingNum);
    }
    public List<ComplainDto> adminComplainList(String lodgingNum) throws Exception {
        return adminMapper.adminComplainList(lodgingNum);
    }

}
