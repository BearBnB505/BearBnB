package com.bearbnb.mapper;

import com.bearbnb.dto.BookingDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface BookingMapper {
    List<BookingDto> bookingList();

    void BookingStateUpdate(BookingDto booking);
}
