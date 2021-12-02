package com.viatour.server.controllers;

import com.viatour.server.models.Activity;
import com.viatour.server.repositories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ActivityController {

    @Autowired
    ActivityRepository activityRepository;

    @GetMapping(value = "/activities")
    public ResponseEntity<List<Activity>> getAllActivities() {
        return new ResponseEntity<>(activityRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/activities/{id}")
    public ResponseEntity getActivity(@PathVariable Long id) {
        return new ResponseEntity(activityRepository.findById(id), HttpStatus.OK);
    }
}
