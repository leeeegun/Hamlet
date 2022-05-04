package com.hamlet.api.service;

import com.hamlet.api.controller.AuthController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hamlet.api.request.UserReq;
import com.hamlet.db.entity.User;
import com.hamlet.db.repository.UserRepository;

@Service("userService")
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	private static Logger logger = LoggerFactory.getLogger(AuthController.class);

	@Override
	public void registUser(UserReq userRegisterInfo) {
		userRegisterInfo.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));

		User user = new User(userRegisterInfo);
		
		userRepository.save(user);
	}

	@Override
	public void modifyUser(Long userId, UserReq userModifyInfo) {
		User user = userRepository.findById(userId).get();

		user.setEmail(userModifyInfo.getEmail());
		user.setNickname(userModifyInfo.getNickname());
		user.setPassword(passwordEncoder.encode(userModifyInfo.getPassword()));

		userRepository.save(user);
	}

	@Override
	public User getUserInfo(Long userId) {
		User user = userRepository.findById(userId).get();
		
		return user;
	}

	@Override
	public User getUserInfo(String email) {
		User user = userRepository.findByEmail(email).get();

		return user;
	}

	@Override
	public void deleteUser(Long userId){
		User user = userRepository.findById(userId).get();
		
		userRepository.delete(user);
	}
}
