package com.bearbnb.controller;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.ReviewDto;
import com.bearbnb.mapper.BookingMapper;
import com.bearbnb.mapper.LodgingMapper;
import com.bearbnb.mapper.ComfortMapper;
import com.bearbnb.mapper.ReviewMapper;
import com.bearbnb.service.HostUpdateService;
import com.bearbnb.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.embedded.tomcat.TomcatConnectorCustomizer;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@ComponentScan(basePackages = {"com.bearbnb.service.HostUpdateService"})
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class HostUpdateController {



    @Autowired
    ComfortMapper comfortMapper;
    @Autowired
    BookingMapper bookingMapper;
    @Autowired
    ReviewMapper reviewMapper;

    @Autowired
    private HostUpdateService hostUpdateService;

    @Autowired
    private ReviewService reviewService;

    @Autowired
    LodgingMapper lodgingMapper;

    @RequestMapping(value = "/bookingList")
    public List<BookingDto> bookingList(BookingDto booking) {
        return bookingMapper.bookingList(booking);
    }

    @RequestMapping(value = "/HostBookingList")
    public List<BookingDto> HostBookingList(BookingDto booking) {
        return bookingMapper.HostBookingList(booking);
    }

    @RequestMapping(value = "/ReviewList")
    public List<ReviewDto> ReviewList(ReviewDto review) {
        return reviewService.ReviewList(review);
    }


    // 후기 자세히보기
    @RequestMapping(value = "/reviewListContent", method = RequestMethod.POST)
    public ReviewDto reviewListContent(ReviewDto review) throws Exception {
        System.out.println(review);
        return hostUpdateService.reviewListContent(review);
    }

    @RequestMapping(value = "/updateLanguage", method = RequestMethod.PUT)
    public void UpdateLanguage(LodgingDto lodging) throws Exception {
        hostUpdateService.updateLanguage(lodging);
    }

    @RequestMapping(value = "/UpdateIntroHost", method = RequestMethod.PUT)
    public String UpdateIntroHost(LodgingDto lodging) throws Exception {
        hostUpdateService.UpdateIntroHost(lodging);
        return null;
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

