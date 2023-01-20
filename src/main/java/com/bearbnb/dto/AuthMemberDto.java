package com.bearbnb.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

@Setter
@Getter
@ToString
public class AuthMemberDto extends User {

    private String userId;
    private String name;
    private String userCode;
    private boolean fromSocial;


    public AuthMemberDto(String username, String password, boolean fromSocial, Collection<? extends GrantedAuthority> auth) {
        super(username, password, auth);
        this.userId = username;
        this.fromSocial = fromSocial;
    }
}
