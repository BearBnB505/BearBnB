package com.bearbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MembersDto {
    private int idx;
    private String userId;
    private String pwd;
    private String userCode;  // 사용자 권한(user, host, admin)
    private String tel;
    private String gender;
    private String name;
    private String birthDt;
    private String nation;
    private String profileImg;
    private String joinDt;
    private String deletedYn;

    private boolean fromSocial;
}
