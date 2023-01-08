package com.is_project.socialmediaapp.entity;
import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Post {
    @Id
    private String postID;

    @Column
    private String userID;
    @Column
    private String userName;
    @Column
    private String imageURL;

    @Column
    private String description;
    @Column
    private String postImgURL;

    @Column
    private int likes;
    @Column
    private Timestamp dateTime;

    public Post(){

    }

    public Post(String postID, String userID, String userName, String imageURL, String description, String postImgURL, int likes, Timestamp dateTime) {
        this.postID = postID;
        this.userID = userID;
        this.userName = userName;
        this.imageURL = imageURL;
        this.description = description;
        this.postImgURL = postImgURL;
        this.likes = likes;
        this.dateTime = dateTime;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPostImgURL() {
        return postImgURL;
    }

    public void setPostImgURL(String postImgURL) {
        this.postImgURL = postImgURL;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public Timestamp getDateTime() {
        return dateTime;
    }

    public void setDateTime(Timestamp dateTime) {
        this.dateTime = dateTime;
    }
    public void increaseLikes()
    {
        this.likes++;
    }
    public void decreaseLikes()
    {
        this.likes--;
    }
}
