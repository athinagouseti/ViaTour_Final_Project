package com.viatour.server.controllers;

import com.viatour.server.models.Trip;
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
}
