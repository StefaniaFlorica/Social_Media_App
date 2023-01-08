package com.is_project.socialmediaapp.entity;

import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;
@Entity
@DynamicUpdate
public class Comment {

    @Id
    private String commentID;
    @Column
    private String postID;
    @Column
    private String userID;
    @Column
    private String userImage;
    @Column
    private String userName;

    public String getUserImage() {
        return userImage;
    }

    public void setUserImage(String userImage) {
        this.userImage = userImage;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    private String comment;
    private Timestamp timestamp;

    public Comment() {

    }

    public Comment(String commentID, String postID, String userID, String userImage, String userName, String comment,
                   Timestamp timestamp) {
        super();
        this.commentID = commentID;
        this.postID = postID;
        this.userID = userID;
        this.userImage = userImage;
        this.userName = userName;
        this.comment = comment;
        this.timestamp = timestamp;
    }

    public String getCommentID() {
        return commentID;
    }

    public void setCommentID(String commentID) {
        this.commentID = commentID;
    }

    public String getPostID() {
        return postID;
    }

    public void setPostID(String postID) {
        this.postID = postID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "commentID=" + commentID +
                ", postID=" + postID +
                ", userID='" + userID + '\'' +
                ", userImage='" + userImage + '\'' +
                ", userName='" + userName + '\'' +
                ", comment='" + comment + '\'' +
                ", timestamp=" + timestamp +
                '}';
    }
}