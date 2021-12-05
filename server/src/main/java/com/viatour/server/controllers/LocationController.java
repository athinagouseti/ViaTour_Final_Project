package com.viatour.server.controllers;

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
// ======
// Locations are stored in User and retrieved through UserController
// ======



//    @Autowired
//    LocationRepository locationRepository;
//
//    @Autowired
//    AuthenticationHelper authenticationHelper;
//
//    @GetMapping(value = "/locations")
//    public ResponseEntity<List<Location>> getAllLocations(@RequestHeader Map<String, String> headers) {
//
//        String uid = authenticationHelper.getUserUIDFromHeaders(headers);
//        return new ResponseEntity<>(locationRepository.findAllByUserId(uid), HttpStatus.OK);
//
//
//    }
//
//    @GetMapping(value = "/locations/{id}")
//    public ResponseEntity getLocation(@PathVariable Long id) {
//        return new ResponseEntity(locationRepository.findById(id), HttpStatus.OK);
//    }
//
//    @PostMapping(value = "/locations")
//    public ResponseEntity<Location> postLocation(@RequestBody Location location, @RequestHeader Map<String, String> headers) {
//
//        String uid = authenticationHelper.getUserUIDFromHeaders(headers);
//        location.setUserId(uid);
//        locationRepository.save(location);
//        return new ResponseEntity<>(location, HttpStatus.CREATED);
//
//    }
}
