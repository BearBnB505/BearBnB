package com.bearbnb.mapper;

import com.bearbnb.dto.*;
import com.github.pagehelper.Page;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
    public List<MembersDto> memberList() throws Exception;
    public List<LodgingDto> lodgingList();

    public List<ComplainDto> complainList();

    public List<BookingDto> bookingList();

    Page<MembersDto> getMembersPaging(int pageNum) throws Exception;

    LodgingDto adminLodgingList(String lodgingNum) throws Exception;

    List<ReviewAvgDto> adminAvgReviewList(String lodgingNum) throws Exception;

    List<ComplainDto> adminComplainList(String lodgingNum) throws Exception;
}

