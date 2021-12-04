package com.viatour.server.controllers;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.viatour.server.helpers.AuthenticationHelper;
import com.viatour.server.models.Location;
import com.viatour.server.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    AuthenticationHelper authenticationHelper;

    @GetMapping(value = "/locations")
    public ResponseEntity<List<Location>> getAllLocations() {
        return new ResponseEntity<>(locationRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/locations/{id}")
    public ResponseEntity getLocation(@PathVariable Long id) {
        return new ResponseEntity(locationRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/locations")
    public ResponseEntity<Location> postLocation(@RequestBody Location location, @RequestHeader Map<String, String> headers) {
        String uid = authenticationHelper.getUserUIDFromHeaders(headers);
        System.out.println(uid);

        location.setUser_id(uid);
        locationRepository.save(location);
        return new ResponseEntity<>(location, HttpStatus.CREATED);
    }
}
