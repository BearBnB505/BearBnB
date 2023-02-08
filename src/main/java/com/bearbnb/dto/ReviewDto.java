package com.bearbnb.dto;

import lombok.Data;

@Data
public class ReviewDto {
    private String userId;
    private String comment;
    private int cleanGrade;
    private int accuracyGrade;
    private int communicationGrade;
    private int locationGrade;
    private int checkInGrade;
    private int costGrade;
    private String lodgingNum;
    private String reviewCreateDt;
    private String deletedYn;

    // join lodging DB
    private String lodgingName;

}
