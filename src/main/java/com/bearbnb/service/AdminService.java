package com.bearbnb.service;

import com.bearbnb.dto.*;
import com.github.pagehelper.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AdminService {

    List<MembersDto> memberList() throws Exception;
    Page<MembersDto> getMemberPaging(int pageNum) throws Exception;
    LodgingDto adminLodgingDetail(String lodgingNum) throws Exception;
    List<ComfortsDto> adminComfortsDetail(String lodgingNum) throws Exception;
    List<LodgingDto> adminLodgingList() throws Exception;
    List<ReviewDto> adminReviewList() throws Exception;
    List< ComplainDto> adminComplainList() throws Exception;
}
