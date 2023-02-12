package com.bearbnb.service;

import com.bearbnb.dto.EmailDto;

public interface EmailService {
    void sendContactHost(EmailDto emailDto) throws Exception;
    void paymentEmail(EmailDto emailDto) throws Exception;

    void UpdateRejectStateMail(EmailDto emailDto) throws Exception;

    void rejectGuestMail(EmailDto emailDto) throws Exception;



    //    숙소승인
    void approveLodging(String lodgingNum) throws Exception;
//  숙소 승인시 호스트 이메일
    void approveLodgingEmail(EmailDto emailDto) throws Exception;

}
