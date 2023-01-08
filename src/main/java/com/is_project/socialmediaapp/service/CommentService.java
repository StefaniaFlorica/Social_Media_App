package com.is_project.socialmediaapp.service;

import com.is_project.socialmediaapp.entity.Comment;
import com.is_project.socialmediaapp.entity.User;
import com.is_project.socialmediaapp.repository.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.UUID;


@Service
public class CommentService {

    @Autowired
    CommentRepo commentRepo;

    @Autowired
    PostService postService;
    @Autowired
    UserService userService;

    public Comment saveComment(Comment comment) {
        comment.setCommentID(UUID.randomUUID().toString());
        User user = userService.getUserById(comment.getUserID());
        comment.setUserImage(user.getUserImageURL());
        comment.setUserName(user.getUserName());
        comment.setTimestamp(new Timestamp(new Date().getTime()));
        return commentRepo.save(comment);
    }

    public List<Comment> getAllComments(String postID){
        return commentRepo.findCommentsByPostID(postID);
    }
}