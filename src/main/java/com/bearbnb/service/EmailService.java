package com.bearbnb.service;

import com.bearbnb.dto.EmailDto;

public interface EmailService {
    void sendContactHost(EmailDto emailDto) throws Exception;
    void paymentEmail(EmailDto emailDto) throws Exception;
}
