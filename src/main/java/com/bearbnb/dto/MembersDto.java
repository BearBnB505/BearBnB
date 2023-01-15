package com.bearbnb.dto;

import lombok.Data;

@Data
public class MembersDto {
    private String userId;
    private String pwd;
    private String userCode;
    private String tel;
    private String gender;
    private String name;
    private String email;
    private String birthDt;
    private String nation;
    private String profileImg;
    private String joinDt;
    private String deletedYn;
}
