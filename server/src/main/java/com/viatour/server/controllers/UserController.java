package com.viatour.server.controllers;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.viatour.server.helpers.AuthenticationHelper;
import com.viatour.server.models.*;
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
import java.util.Map;
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

    @Autowired
    AuthenticationHelper authenticationHelper;

    // Changed URL from /users/ to /user/ because with authentication in, a user should only be able to request their own data

    @GetMapping(value = "/user")
    public ResponseEntity<User> getUser(@RequestHeader Map<String, String> headers) {
        String firebaseUID = authenticationHelper.getUserUIDFromHeaders(headers);

        User user = userRepository.getById(firebaseUID);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping(value = "/user")
    public ResponseEntity<User> postUser(@RequestBody PotentialUser potentialUserInfo) {
        UserRecord.CreateRequest firebaseRequest = new UserRecord.CreateRequest()
                .setEmail(potentialUserInfo.getEmail())
                .setPassword(potentialUserInfo.getPassword())
                .setEmailVerified(false)
                .setDisabled(false);

        User newUser = null;

        try {
            UserRecord firebaseUserRecord = FirebaseAuth.getInstance().createUser(firebaseRequest);
            newUser = new User(firebaseUserRecord.getUid(), potentialUserInfo.getFirstName(), potentialUserInfo.getLastName());
            userRepository.save(newUser);

        } catch (FirebaseAuthException e) {
            e.printStackTrace();
        }

        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @GetMapping(value = "/user/trips")
    public ResponseEntity<List<Trip>> getTrips(@RequestHeader Map<String, String> headers) {
        String firebaseUID = authenticationHelper.getUserUIDFromHeaders(headers);

        User user = userRepository.getById(firebaseUID);

        return new ResponseEntity<>(user.getTrips(), HttpStatus.OK);
    }

    @PostMapping(value = "/user/trips")
    public ResponseEntity<Trip> postTrip(@RequestBody Trip trip, @RequestHeader Map<String, String> headers) {
        String firebaseUID = authenticationHelper.getUserUIDFromHeaders(headers);

        tripRepository.save(trip);

        User user = userRepository.getById(firebaseUID);
        user.joinTrip(trip);
        userRepository.save(user);

        return new ResponseEntity<>(trip, HttpStatus.CREATED);
    }

    @GetMapping(value = "/user/wishlist")
    public ResponseEntity<List<Location>> getWishlistLocations(@RequestHeader Map<String, String> headers) {
        String firebaseUID = authenticationHelper.getUserUIDFromHeaders(headers);

        User user = userRepository.getById(firebaseUID);

        return new ResponseEntity<>(user.getWishList(), HttpStatus.OK);
    }

    @PostMapping(value = "/user/wishlist")
    public ResponseEntity<Location> addLocationToWishlist(@RequestBody Location location, @RequestHeader Map<String, String> headers) {
        String firebaseUID = authenticationHelper.getUserUIDFromHeaders(headers);

        locationRepository.save(location);

        User user = userRepository.getById(firebaseUID);
        user.addToWishList(location);
        userRepository.save(user);

        return new ResponseEntity<>(location, HttpStatus.CREATED);
    }
}