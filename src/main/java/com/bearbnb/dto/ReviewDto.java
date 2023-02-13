package com.bearbnb.dto;

import lombok.Data;

@Data
public class ReviewDto {
    private int idx;
    private String userId;
    private String comment;
    private double cleanGrade;
    private double accuracyGrade;
    private double communicationGrade;
    private double locationGrade;
    private double checkInGrade;
    private double costGrade;
    private String lodgingNum;

    private String reviewCreateDt;
    private String deletedYn;

    private int reviewCount;
    private double reviewTotal;

    //멤버에서 가꼬옴
    private String name;

    // join lodging DB
    private String lodgingName;

}
