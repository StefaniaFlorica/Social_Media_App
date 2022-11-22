package com.is_project.socialmediaapp.entity;

import org.hibernate.annotations.DynamicUpdate;
import org.springframework.lang.NonNull;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
@DynamicUpdate
public class User {

    @Id
    private String userId;

    @Column
    private String userName;
    @Column
    private String userImageURL;
    @Column
    private boolean activityStatus;
    @Column
    private Timestamp joiningDate;

    public User() {
    }

    public User(String userId, String userName, String userImageURL, boolean activityStatus, Timestamp joiningDate) {
        this.userId = userId;
        this.userName = userName;
        this.userImageURL = userImageURL;
        this.activityStatus = activityStatus;
        this.joiningDate = joiningDate;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserImageURL() {
        return userImageURL;
    }

    public void setUserImageURL(String userImageURL) {
        this.userImageURL = userImageURL;
    }

    public boolean isActivityStatus() {
        return activityStatus;
    }

    public void setActivityStatus(boolean activityStatus) {
        this.activityStatus = activityStatus;
    }

    public Timestamp getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(Timestamp joiningDate) {
        this.joiningDate = joiningDate;
    }
}
