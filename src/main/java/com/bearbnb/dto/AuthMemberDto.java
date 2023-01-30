package com.bearbnb.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;
import java.util.Set;

@Setter
@Getter
@ToString
public class AuthMemberDto extends User {

    private String userId;
    private String name;
    private boolean fromSocial;


    public AuthMemberDto(String username, String password, boolean fromSocial, Set<GrantedAuthority> auth) {
        super(username, password, auth);
        this.userId = username;
        this.fromSocial = fromSocial;
    }
}
