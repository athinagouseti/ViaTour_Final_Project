package com.viatour.server.controllers;

import com.viatour.server.models.Location;
import com.viatour.server.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @GetMapping(value = "/locations")
    public ResponseEntity<List<Location>> getAllLocations() {
        return new ResponseEntity<>(locationRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/locations/{id}")
    public ResponseEntity getLocation(@PathVariable Long id) {
        return new ResponseEntity(locationRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/locations")
    public ResponseEntity<Location> postLocation(@RequestBody Location location) {
        locationRepository.save(location);
        return new ResponseEntity<>(location, HttpStatus.CREATED);
    }
}
