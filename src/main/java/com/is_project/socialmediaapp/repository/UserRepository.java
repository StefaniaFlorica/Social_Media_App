package com.is_project.socialmediaapp.repository;

import com.is_project.socialmediaapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User save(User user);
    List<User> findAll();
    User findUsersByUserId(String userId);

//    @Modifying
//    @Query("update User u set u.userImageURL = :url where u.userId = :id")
//    void updateProfilePicURL(@Param(value = "id") String userId, @Param(value = "url") String userImageURL);

}
