package com.bearbnb.service;

import com.bearbnb.dto.LodgingDto;
import com.google.gson.Gson;

import java.util.Map;

public interface HostUpdateService {

    void hostLodgingUpdate(LodgingDto lodging) throws Exception;

    void UpdateLodgingIntro(LodgingDto lodging);

    void UpdateLodgingConcept(LodgingDto lodging);

    void UpdateLodgingBedNBath(LodgingDto lodging);

    void UpdateComfortsList(String ComfortBox);
}
