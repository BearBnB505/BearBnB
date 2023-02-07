package com.bearbnb.controller;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.mapper.BookingMapper;
import com.bearbnb.mapper.LodgingMapper;
import com.bearbnb.mapper.ComfortMapper;
import com.bearbnb.service.HostUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@ComponentScan(basePackages = {"com.bearbnb.service.HostUpdateService"})
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class HostUpdateController {


    @Autowired
    LodgingMapper CallLodgingMapper;
    @Autowired
    ComfortMapper comfortMapper;
    @Autowired
    BookingMapper bookingMapper;
    @Autowired
    private HostUpdateService hostUpdateService;

//    @RequestMapping(value = "/bookingList")
//    public List<BookingDto> bookingList(@RequestParam("bookState") String bookState) {
//        return bookingMapper.bookingList(bookState);
//    }

    @RequestMapping(value = "/bookingList")
    public List<BookingDto> bookingList() {
        return bookingMapper.bookingList();
    }


    @RequestMapping(value = "/UpdateLanguage", method = RequestMethod.PUT)
    public String UpdateLanguage(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateLanguage(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateIntroHost", method = RequestMethod.PUT)
    public String UpdateIntroHost(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateIntroHost(lodging);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateAgreeState", method = RequestMethod.PUT)
    public String UpdateBookingState(BookingDto booking) throws Exception {
        hostUpdateService.UpdateBookingState(booking);

        return "redirect:/UpdateLodgingList";
    }

    @RequestMapping(value = "/UpdateRejectState", method = RequestMethod.PUT)
    public String UpdateRejectState(BookingDto booking) throws Exception {
        hostUpdateService.UpdateRejectState(booking);

        return "redirect:/UpdateLodgingList";
    }



}

