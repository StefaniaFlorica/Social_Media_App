package com.is_project.socialmediaapp.repository;


import com.is_project.socialmediaapp.entity.Comment;
import com.is_project.socialmediaapp.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public interface CommentRepo extends JpaRepository<Comment, UUID> {

    Comment save(Comment comment);
    List<Comment> findAll();
    List<Comment> findAllByPostID(UUID postID);
}