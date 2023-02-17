package com.bearbnb.mapper;

import com.bearbnb.dto.BookingDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface BookingMapper {
    List<BookingDto> bookingList(BookingDto booking);

    void BookingStateUpdate(BookingDto booking);

    void RejectStateUpdate(BookingDto booking);

    List<BookingDto> HostBookingList(BookingDto booking);

    List<BookingDto> cancelList(BookingDto booking);

    void stateUpdate(BookingDto booking);
}
