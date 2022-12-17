package com.is_project.socialmediaapp.controller;

import com.is_project.socialmediaapp.entity.Status;
import com.is_project.socialmediaapp.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/statusService")
public class StatusController {

    @Autowired
    StatusService statusService;

    @PostMapping("/save")
    public Status saveStatus(@RequestBody Status body) {
        return statusService.submitStatus(body);
    }

    @GetMapping("/getAllStatus")
    public List<Status> retrieveAllStatus() {
        return statusService.retrieveAllStatus();
    }

    @GetMapping("/getStatusById/{statusId}")
    public Status getStatusById(@PathVariable String statusId) {
        return statusService.getStatusById(statusId);
    }

    @DeleteMapping("/deleteStatus/{statusId}")
    public void deleteStatus(@PathVariable String statusId) {
        statusService.deleteStatus(statusId);
    }

}
