package com.hamlet.common.auth;

import com.hamlet.api.service.UserService;
import com.hamlet.db.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class HamletUserDetailsService implements UserDetailsService {
    @Autowired
    UserService userService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userService.getUserInfo(email);
        if(user != null) {
            HamletUserDetails userDetails = new HamletUserDetails(user);
            return userDetails;
        }
        return null;
    }

}
