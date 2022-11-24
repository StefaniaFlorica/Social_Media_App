package com.is_project.socialmediaapp.service;

import com.is_project.socialmediaapp.entity.Post;
import com.is_project.socialmediaapp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.is_project.socialmediaapp.repository.PostRepo;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class PostService {

    @Autowired
    PostRepo postRepo;
    @Autowired
    UserService userService;
    public Post submitPostToDB(Post postData){
        User user = userService.getUserById(postData.getUserID());
        postData.setImageURL(user.getUserImageURL());
        postData.setUserName(user.getUserName());
        postData.setDateTime(new Timestamp(new Date().getTime()));
        return postRepo.save(postData);
    }

    public List<Post> retrievePostFromDB(){
        return postRepo.findAll();
    }
//    public List<Post> deletePostFromDB(UUID postID){
//        postRepo.deleteById(postID);
//        List<Post> result =retrievePostFromDB();
//        return result;
//
//    }

}
