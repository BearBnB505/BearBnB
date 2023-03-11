package com.bearbnb.service;

import com.bearbnb.dto.BookingDto;
import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.mapper.BookingMapper;
import com.bearbnb.mapper.ComfortMapper;
import com.bearbnb.mapper.LodgingMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bearbnb.dto.LodgingDto;

import java.util.List;

@Service
public class HostUpdateServiceImpl implements HostUpdateService{
    @Autowired
    private LodgingMapper lodgingMapper;

    @Autowired
    private ComfortMapper comfortMapper;

    @Autowired
    private BookingMapper bookingtMapper;

    @Override
    public void hostLodgingUpdate(LodgingDto lodging) throws Exception{
//        LodgingDto lodgingUpdate = new LodgingDto();
//        lodgingUpdate.setLodgingName(lodgingName);

        lodgingMapper.hostLodgingUpdate(lodging);
    }

    @Override
    public void UpdateLanguage(String userId, String language) {
        lodgingMapper.LanguageUpdate( userId, language);
    }

    @Override
    public void UpdateIntroHost(LodgingDto lodging) {
        lodgingMapper.IntroHostUpdate(lodging);

    }

    @Override
    public void UpdateBookingState(BookingDto booking) {
        bookingtMapper.BookingStateUpdate(booking);
    }

    @Override
    public void UpdateRejectState(BookingDto booking) {
        bookingtMapper.RejectStateUpdate(booking);

    }

    public void UpdateLodgingIntro(LodgingDto lodging) {
        lodgingMapper.LodgingIntroUpdate(lodging);
    }

    @Override
    public void UpdateLodgingConcept(LodgingDto lodging) {
        lodgingMapper.LodgingConceptUpdate(lodging);

    }

    @Override
    public void UpdateLodgingBedNBath(LodgingDto lodging) {
        lodgingMapper.LodgingBedNBathUpdate(lodging);
    }

    @Override
    public void UpdateComfortsList(List<ComfortsDto> ComfortBox) {

        for (ComfortsDto item : ComfortBox) {
            comfortMapper.ComfortListUpdate(item);
        }
//        comfortMapper.ComfortListUpdate(ComfortBox);
    }

    @Override
    public void UpdateCapacity(LodgingDto lodging) {
        lodgingMapper.CapacityUpdate(lodging);
    }




}
