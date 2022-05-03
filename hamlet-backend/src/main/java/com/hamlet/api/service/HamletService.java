package com.hamlet.api.service;

import java.util.List;

import com.hamlet.api.request.HamletReq;
import com.hamlet.db.entity.Hamlet;
import com.hamlet.db.entity.User;

public interface HamletService {
	void createHamlet(User user, HamletReq hamletCreateInfo);
	void modifyHamlet(Long hamletId, String Title);
	void deleteHamlet(Long hamletId);
	List<Hamlet> getHamletList(Long userId);
}
