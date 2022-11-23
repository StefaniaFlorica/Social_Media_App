package com.is_project.socialmediaapp.repository;
import com.is_project.socialmediaapp.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;


@Repository
public interface PostRepo extends JpaRepository<Post, UUID> {

    List<Post> findAll();
    Post save (Post post);
   // void deleteById(UUID postID);
}
