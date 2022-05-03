package com.hamlet.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hamlet.api.request.HamletReq;
import com.hamlet.api.request.UserReq;
import com.hamlet.db.entity.Hamlet;
import com.hamlet.db.entity.User;
import com.hamlet.db.repository.HamletRepository;
import com.hamlet.db.repository.UserRepository;

@Service("userService")
public class HamletServiceImpl implements HamletService{
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	HamletRepository hamletRepository;

	@Override
	public void createHamlet(HamletReq hamletCreateInfo) {
		User user = userRepository.findById(hamletCreateInfo.getUserId()).get();
		Hamlet hamlet = new Hamlet(user, hamletCreateInfo.getTitle());
		
		hamletRepository.save(hamlet);
	}

	@Override
	public void modifyHamlet(Long hamletId, String title) {
		Hamlet hamlet = hamletRepository.findById(hamletId).get();
		hamlet.setTitle(title);
		
		hamletRepository.save(hamlet);
	}

	@Override
	public void deleteHamlet(Long hamletId) {
		Hamlet hamlet = hamletRepository.findById(hamletId).get();
		
		hamletRepository.delete(hamlet);
	}

	@Override
	public List<Hamlet> getHamletList(Long userId) {
		List<Hamlet> hamlets = hamletRepository.findHamletById();
		
		return hamlets;
	}

}
