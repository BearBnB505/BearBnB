package com.bearbnb.dto;

import lombok.Data;

@Data
public class KeepingDto {
    private String userId;
    private int idx;
    private String lodgingNum;
    private String keepDt;
    private String deleteYn;

    //lodging dto
    private String lodgingName;
    private String addr;
    private String certifyImg;

    //review dto
    private String accuracyGrade;
    private String cleanGrade;
    private String communicationGrade;
    private String locationGrade ;
    private String checkInGrade;
    private String costGrade;
}
