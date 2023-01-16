package com.bearbnb.dto;

import lombok.Data;

@Data
public class ComplainDto {
    private String userId;
    private String lodgingNum;
    private String reason;
    private String reasonDetail;
    private String complainDt;
    private String deletedYn;
}
