package com.viatour.server.controllers;

import com.viatour.server.models.Day;
import com.viatour.server.models.Location;
import com.viatour.server.models.Trip;
import com.viatour.server.models.User;
import com.viatour.server.repositories.DayRepository;
import com.viatour.server.repositories.LocationRepository;
import com.viatour.server.repositories.TripRepository;
import com.viatour.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TripRepository tripRepository;

    @Autowired
    DayRepository dayRepository;

    @Autowired
    LocationRepository locationRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/users/{id}")
    public ResponseEntity getUser(@PathVariable Long id) {
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/users")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping(value = "/users/{userId}/trips")
    public ResponseEntity<Trip> postTrip(@RequestBody Trip trip, @PathVariable Long userId) {
        tripRepository.save(trip);
        User user = userRepository.getById(userId);
        user.joinTrip(trip);
        userRepository.save(user);
        return new ResponseEntity<>(trip, HttpStatus.CREATED);
    }

    @PostMapping(value = "/users/{userId}/wishList")
    public ResponseEntity<Location> addLocationToWishlist(@RequestBody Location location, @PathVariable Long userId) {
        locationRepository.save(location);
        User user = userRepository.getById(userId);
        user.addToWishList(location);
        userRepository.save(user);
        return new ResponseEntity<>(location, HttpStatus.CREATED);
    }
}