package com.is_project.socialmediaapp.service;

import com.is_project.socialmediaapp.entity.Status;
import com.is_project.socialmediaapp.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class StatusService {

    @Autowired
    StatusRepository statusRepo;

    @Autowired
    UserService userService;

    public Status submitStatus(Status status) {
        status.setDateTime(new Timestamp(new Date().getTime()));

        return statusRepo.save(status);
    }

    public List<Status> retrieveAllStatus() {
        return statusRepo.findAll();
    }

    public Status getStatusById(String statusId) {
        return statusRepo.findStatusByStatusId(statusId);
    }

    @Transactional
    // folosit ca sa mearga delete; se pune atunci cand intr-o singura metoda se fac mai multe query-uri pe DB
    // la delete, se face intai select, si apoi delete
    public void deleteStatus(String statusId) {
        statusRepo.deleteByStatusId(statusId);
    }

}
