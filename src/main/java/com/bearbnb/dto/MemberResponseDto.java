package com.bearbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberResponseDto {
    private String userId;
    private String name;

    public static MemberResponseDto of(MembersDto member) {
        return MemberResponseDto.builder()
                .userId(member.getUserId())
                .name(member.getName())
                .build();
    }
}