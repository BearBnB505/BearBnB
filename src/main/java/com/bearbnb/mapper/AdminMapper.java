package com.bearbnb.mapper;

import com.bearbnb.dto.*;
import com.github.pagehelper.Page;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
    public List<MembersDto> memberList() throws Exception;
    public List<ComplainDto> complainList();
    public List<BookingDto> bookingList();
    Page<MembersDto> getMembersPaging(int pageNum) throws Exception;
    LodgingDto adminLodgingDetail(String lodgingNum) throws Exception;
    List<ComfortsDto> adminComfortsDetail(String lodgingNum) throws Exception;
    List<AdminLodgingDto> adminLodgingList() throws Exception;

}

