package com.bearbnb.dto;

import lombok.Data;

@Data
public class EmailDto {
    private String from; //발신자
    private String to; //수신자
    private String title; //제목
    private String contents; //내용
}
