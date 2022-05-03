package com.hamlet.api.service;

import com.hamlet.api.request.UserReq;
import com.hamlet.db.entity.User;

public interface UserService {
	void registUser(UserReq userRegisterInfo);
	void modifyUser(Long userId, UserReq userModifyInfo);
	User getUserInfo(Long userId);
	void deleteUser(Long userId);
}
