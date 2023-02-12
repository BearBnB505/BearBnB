package com.bearbnb.service;

import com.bearbnb.dto.EmailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    JavaMailSender emailSender;
//    private JavaMailSender mailSender;
//    private static final String FROM_ADDRESS = "YOUR_EMAIL_ADDRESS";

//    호스트에게 연락하기
    @Override
    public void sendContactHost(EmailDto emailDto) throws Exception{

        MimeMessage message = sendContactHostMessage(emailDto);
        try{
            emailSender.send(message);
        } catch (MailException e) {
            e.printStackTrace();
            throw new IllegalAccessException();
        }
    }


//    숙소예약시 호스트에게
    @Override
    public void paymentEmail(EmailDto emailDto) throws Exception{

        MimeMessage message = sendContactHostMessage(emailDto);
        try{
            emailSender.send(message);
        } catch (MailException e) {
            e.printStackTrace();
            throw new IllegalAccessException();
        }
    }




    public MimeMessage sendContactHostMessage(EmailDto emailDto) throws Exception{

        MimeMessage message = emailSender.createMimeMessage();
        message.addRecipients(Message.RecipientType.TO, emailDto.getTo());//보내는 대상
        message.setSubject(emailDto.getTitle());//제목
        message.setText(emailDto.getContents());
        message.setFrom(new InternetAddress(emailDto.getFrom(),emailDto.getFrom()));

        return message;
    }
}
