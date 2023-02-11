package com.bearbnb.dto;

import lombok.Data;

@Data
public class AdminLodgingDto {
    private int idx;
    private String lodgingNum;
    private String userId;
    private String lodgingName;
    private String regState;
    private String createDt;
    private String deletedYn;
    private double review;
    private double count;
}
