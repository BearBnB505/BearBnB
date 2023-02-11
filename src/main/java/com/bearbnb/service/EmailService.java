package com.bearbnb.service;

import com.bearbnb.dto.EmailDto;

public interface EmailService {
    void sendContactHost(EmailDto emailDto) throws Exception;
}
