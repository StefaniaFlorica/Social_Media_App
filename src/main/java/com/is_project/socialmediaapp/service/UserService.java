package com.is_project.socialmediaapp.service;

import com.is_project.socialmediaapp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.is_project.socialmediaapp.repository.UserRepository;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepo;

    public User submitUser(User user)
    {
        user.setActivityStatus(true);
        user.setJoiningDate(new Timestamp(new Date().getTime()));
        return userRepo.save(user);
    }
    public List<User> retrieveAllUsers(String userId)
    {
        return userRepo.findAll().stream().filter(user -> !(user.getUserId().equals(userId))).limit(10).toList();
    }
    public User getUserById(String userId)
    {
        return userRepo.findUsersByUserId(userId);
    }

//    public void updateUserProfilePic(String userId, String userImageURL)
//    {
//        userRepo.updateProfilePicURL(userId,userImageURL);
//    }
}
