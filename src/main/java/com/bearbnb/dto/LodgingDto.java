package com.bearbnb.dto;

import lombok.Data;

@Data
public class LodgingDto {
    private int idx;
    private String lodgingNum;
    private String userId;
    private String certifyImg;
    private String lodgingName;
    private String lodgingConcept;
    private String zipCode;
    private String addr;
    private double latitude;
    private double longitude;
    private String introHost;
    private String introLodging;
    private int cost;
    private int peopleNum;
    private String checkInDt;
    private String checkOutDt;
    private int bedroomNum;
    private int bedNum;
    private String bedSize;
    private int bathroomNum;
    private String regState;
    private String createDt;
    private String updateDt;
    private String deletedYn;
}
