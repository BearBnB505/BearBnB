package com.bearbnb.dto;

import lombok.Data;

@Data
public class ReviewDto {
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
}
