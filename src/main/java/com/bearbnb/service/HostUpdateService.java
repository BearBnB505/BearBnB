package com.bearbnb.service;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.LodgingDto;

import java.util.List;

public interface HostUpdateService {

    void hostLodgingUpdate(LodgingDto lodging) throws Exception;

    void UpdateLodgingIntro(LodgingDto lodging);

    void UpdateLodgingConcept(LodgingDto lodging);

    void UpdateLodgingBedNBath(LodgingDto lodging);

    void UpdateComfortsList(List<ComfortsDto> ComfortBox);

    void UpdateCapacity(LodgingDto lodging);

    void UpdateLanguage(LodgingDto lodging);

    void UpdateIntroHost(LodgingDto lodging);

    void UpdateBookingState(BookingDto booking);

    void UpdateRejectState(BookingDto booking);
}
