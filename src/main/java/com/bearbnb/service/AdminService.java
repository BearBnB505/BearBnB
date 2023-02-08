package com.bearbnb.service;

import com.bearbnb.dto.ComplainDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.dto.ReviewAvgDto;
import com.github.pagehelper.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AdminService {

    List<MembersDto> memberList() throws Exception;
    Page<MembersDto> getMemberPaging(int pageNum) throws Exception;
    LodgingDto adminLodgingList(String lodgingNum) throws Exception;
    List<ReviewAvgDto> adminAvgReviewList(String lodgingNum) throws Exception;
    List<ComplainDto> adminComplainList(String lodgingNum) throws Exception;
}
