package com.bearbnb.mapper;

import com.bearbnb.dto.LodgingDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface LodgingMapper {


    List<LodgingDto> lodgingList();

    List<LodgingDto> CallLodgingList();


    void hostLodgingUpdate(LodgingDto lodging);

    void LodgingIntroUpdate(LodgingDto lodging);

    void LodgingConceptUpdate(LodgingDto lodging);

    void LodgingBedNBathUpdate(LodgingDto lodging);

    void CapacityUpdate(LodgingDto lodging);
}
