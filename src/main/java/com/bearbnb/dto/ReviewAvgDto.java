package com.bearbnb.dto;

import lombok.Data;

@Data
public class ReviewAvgDto {
    private double cleanGrade;
    private double accuracyGrade;
    private double communicationGrade;
    private double locationGrade;
    private double checkInGrade;
    private double costGrade;
    private double reviewTotal;
    private int reviewCount;
}
