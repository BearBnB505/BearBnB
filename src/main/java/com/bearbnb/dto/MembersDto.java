package com.bearbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
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

    private Authority authority;

    @Builder
    public MembersDto(String userId, String pwd, String name, Authority authority) {
        this.userId = userId;
        this.pwd = pwd;
        this.name = name;
        this.authority = authority;
    }
}
