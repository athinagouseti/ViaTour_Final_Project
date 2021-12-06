package com.viatour.server.controllers;

import com.viatour.server.models.Activity;
import com.viatour.server.repositories.ActivityRepository;
import com.viatour.server.repositories.DayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ActivityController {

    @Autowired
    ActivityRepository activityRepository;

    @Autowired
    DayRepository dayRepository;

    @GetMapping(value = "/activities")
    public ResponseEntity<List<Activity>> getAllActivities() {
        return new ResponseEntity<>(activityRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/activities/{id}")
    public ResponseEntity getActivity(@PathVariable Long id) {
        return new ResponseEntity(activityRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/activities")
    public ResponseEntity postActivity(@RequestBody Activity activity) {
        activityRepository.save(activity);
        return new ResponseEntity(activity, HttpStatus.CREATED);
    }
}
