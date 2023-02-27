package com.bearbnb.service;
import com.bearbnb.dto.*;
import com.bearbnb.mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingMapper bookingMapper;

    @Override
    public List<BookingDto> cancelList(BookingDto booking) {
        return bookingMapper.cancelList(booking);
    }

    @Override
    public void updateState(BookingDto booking) {
        bookingMapper.stateUpdate(booking);
    }
}


