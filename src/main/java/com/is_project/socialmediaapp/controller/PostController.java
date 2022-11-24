package com.is_project.socialmediaapp.controller;


import com.is_project.socialmediaapp.entity.Post;
import java.util.List;

import com.is_project.socialmediaapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;

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

//    @DeleteMapping("/deletePosts/{postId}")
//    public List<Post> deleteParticularPost(@PathVariable ("postId") String postID){
//        List<Post> result = postService.deletePostFromDB(fromString(postID));
//        return result;
//    }


}
