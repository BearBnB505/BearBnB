package com.bearbnb.dto;

import lombok.Data;

@Data
public class BookingDto {
    private String userId;
    private String lodgingNum;
    private String bookNum;
    private String bookState;
    private String bookDt;
    private String payType;
    private int payCost;
    private String payDt;
    private String bookCheckInDt;
    private String bookCheckOutDt;
    private int adultNum;
    private int babyNum;
    private int petNum;

//    lodgingDto
    private String lodgingName;

//    membersDto
    private String name;
    private String nation;
    private String tel;



}
