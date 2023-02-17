package com.bearbnb.service;
import com.bearbnb.dto.BookingDto;

import java.util.List;

public interface BookingService {
    List<BookingDto> cancelList(BookingDto booking);


    void updateState(BookingDto booking);
}
