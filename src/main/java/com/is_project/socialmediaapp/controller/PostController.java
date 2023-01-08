package com.is_project.socialmediaapp.controller;

import com.is_project.socialmediaapp.entity.Post;
import java.util.List;

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

//    @PutMapping("/updatePost/{postId}")
//    public Post updatePostById(@PathVariable("postId") String postId, @RequestBody Post newPostData) {
//
//        return postService.updatePostById(postId,newPostData);
//    }
    @PutMapping("/updatePostLikes/{postId}/{increase}")
    public Post updatePostLikesById(@PathVariable("postId") String postId, @PathVariable("increase") String increase) {

        return postService.updatePostLikesById(postId,increase);
    }

    @GetMapping("/getPostById/{postId}")
    public Post getPostById(@PathVariable("postId") String postId)
    {
        return postService.getPostById(postId);
    }
//    @DeleteMapping("/deletePosts/{postId}")
//    public List<Post> deleteParticularPost(@PathVariable ("postId") String postID){
//        List<Post> result = postService.deletePostFromDB(fromString(postID));
//        return result;
//    }



}
