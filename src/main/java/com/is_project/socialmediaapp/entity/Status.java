package com.is_project.socialmediaapp.entity;

import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
@DynamicUpdate
public class Status {
    @Id
    @Column(name = "status_id")
    private String statusId;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "status_imageurl")
    private String statusImgURL;

    @Column(name = "date_time")
    private Timestamp dateTime;

    public Status() {

    }

    public Status(String statusId, String userId, String statusImgURL, Timestamp dateTime) {
        this.statusId = statusId;
        this.userId = userId;
        this.statusImgURL = statusImgURL;
        this.dateTime = dateTime;
    }

    public String getStatusId() {
        return statusId;
    }

    public void setStatusId(String statusID) {
        this.statusId = statusID;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userID) {
        this.userId = userID;
    }

    public String getStatusImgURL() {
        return statusImgURL;
    }

    public void setStatusImgURL(String statusImgURL) {
        this.statusImgURL = statusImgURL;
    }

    public Timestamp getDateTime() {
        return dateTime;
    }

    public void setDateTime(Timestamp dateTime) {
        this.dateTime = dateTime;
    }
}
