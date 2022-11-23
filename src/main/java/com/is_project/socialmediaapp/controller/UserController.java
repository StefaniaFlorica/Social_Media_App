package com.is_project.socialmediaapp.controller;

import com.is_project.socialmediaapp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.is_project.socialmediaapp.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/userService")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/save")
    public User saveUser(@RequestBody User user) {
        return userService.submitUser(user);
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers()
    {
        return userService.retrieveAllUsers();
    }

    @GetMapping("/getUserById/{userId}")
    public User getUserDetail(@PathVariable("userId") String userId)
    {
        return userService.getUserById(userId);
    }

//    @PutMapping ("/updateUser/{userId}")
//    public User updateUserDetails(@PathVariable("userId") String userId, @RequestBody String userImageURL)
//    {
//        userService.updateUserProfilePic(userId,userImageURL);
//        return userService.getUserById(userId);
//    }

}
