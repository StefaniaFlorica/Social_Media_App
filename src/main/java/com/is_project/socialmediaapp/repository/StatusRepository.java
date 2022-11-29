package com.is_project.socialmediaapp.repository;

import com.is_project.socialmediaapp.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatusRepository extends JpaRepository<Status, String> {

    Status save(Status status);

    Status findStatusByStatusId(String statusId);

    List<Status> findAll();

    void deleteByStatusId(String statusId);
}
