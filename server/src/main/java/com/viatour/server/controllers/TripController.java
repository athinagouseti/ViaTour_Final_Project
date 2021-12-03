package com.viatour.server.controllers;

import com.viatour.server.models.Day;
import com.viatour.server.models.Trip;
import com.viatour.server.repositories.DayRepository;
import com.viatour.server.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TripController {

    @Autowired
    TripRepository tripRepository;

    @Autowired
    DayRepository dayRepository;

    @GetMapping(value = "/trips")
    public ResponseEntity<List<Trip>> getAllTrips() {
        return new ResponseEntity<>(tripRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/trips/{id}")
    public ResponseEntity getTrip(@PathVariable Long id) {
        return new ResponseEntity(tripRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/trips")
    public ResponseEntity<Trip> postTrip(@RequestBody Trip trip) {
        tripRepository.save(trip);
        return new ResponseEntity<Trip>(trip, HttpStatus.CREATED);
    }

    @PostMapping(value = "/trips/{id}/days")
    public ResponseEntity<Day> postDay(@RequestBody Day day, @PathVariable Long id) {
        dayRepository.save(day);
        Trip trip = tripRepository.getById(id);
        trip.addDay(day);
        day.setTrip(trip);
        dayRepository.save(day);
        tripRepository.save(trip);
        return new ResponseEntity<>(day, HttpStatus.CREATED);
    }
}
