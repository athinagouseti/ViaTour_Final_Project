package com.viatour.server.controllers;

import com.viatour.server.models.Activity;
import com.viatour.server.models.Day;
import com.viatour.server.repositories.ActivityRepository;
import com.viatour.server.repositories.DayRepository;
import com.viatour.server.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DayController {

    @Autowired
    DayRepository dayRepository;

    @Autowired
    TripRepository tripRepository;

    @Autowired
    ActivityRepository activityRepository;

    @GetMapping(value = "/days")
    public ResponseEntity<List<Day>> getAllDays() {
        return new ResponseEntity<>(dayRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/days/{id}")
    public ResponseEntity getDay(@PathVariable Long id) {
        return new ResponseEntity(dayRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/days")
    public ResponseEntity<Day> postDay(@RequestBody Day day) {
        dayRepository.save(day);
        day.getTrip().addDay(day);
        tripRepository.save(day.getTrip());
        return new ResponseEntity<>(day, HttpStatus.CREATED);
    }

    @PostMapping(value = "/days/{id}/activities")
    public ResponseEntity<Activity> postActivity(@RequestBody Activity activity, @PathVariable Long id) {
        Day day = dayRepository.getById(id);
        activity.setDay(day);
        day.addActivity(activity);
        activityRepository.save(activity);
        dayRepository.save(day);
        return new ResponseEntity<>(activity, HttpStatus.CREATED);
    }

}
