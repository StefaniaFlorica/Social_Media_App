package com.is_project.socialmediaapp.controller;


import com.is_project.socialmediaapp.entity.Post;
import java.util.List;
import java.util.UUID;

import com.is_project.socialmediaapp.entity.User;
import com.is_project.socialmediaapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin
@RestController
@RequestMapping("/api/postService")
public class PostController {
    @Autowired
    PostService postService;

    @PostMapping("/save")
    public Post savePost(@RequestBody Post body){
        return postService.submitPostToDB(body);

    }

    @GetMapping("/getAllPosts")
    public List<Post> retriveAllPost(){
        return postService.retrievePostFromDB();
    }
    @GetMapping("/getPostById/{postId}")
    public Post getPostById(@PathVariable("postId") String postId)
    {
        return postService.getPostById(UUID. fromString(postId));
    }
//    @DeleteMapping("/deletePosts/{postId}")
//    public List<Post> deleteParticularPost(@PathVariable ("postId") String postID){
//        List<Post> result = postService.deletePostFromDB(fromString(postID));
//        return result;
//    }



}
