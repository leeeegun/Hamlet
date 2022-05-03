package com.hamlet.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hamlet.api.request.UserReq;
import com.hamlet.db.entity.User;
import com.hamlet.db.repository.UserRepository;

@Service("userService")
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;

	@Override
	public void registUser(UserReq userRegisterInfo) {
		User user = new User(userRegisterInfo);
		
		userRepository.save(user);
	}

	@Override
	public void modifyUser(Long userId, UserReq userModifyInfo) {
		User user = userRepository.getById(userId);
		user.setEmail(userModifyInfo.getEmail());
		user.setNickname(userModifyInfo.getNickname());
		user.setPassword(userModifyInfo.getPassword());
		
		userRepository.save(user);
	}

	@Override
	public User getUserInfo(Long userId) {
		User user = userRepository.findById(userId).get();
		
		return user;
	}

	@Override
	public void deleteUser(Long userId){
		User user = userRepository.findById(userId).get();
		
		userRepository.delete(user);
	}
}
