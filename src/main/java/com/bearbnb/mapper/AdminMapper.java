package com.bearbnb.mapper;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.dto.ComplainDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.MembersDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
    public List<MembersDto> memberList();
    public List<LodgingDto> lodgingList();

    public List<ComplainDto> complainList();

    public List<BookingDto> bookingList();
}

