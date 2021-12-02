package com.viatour.server.controllers;

import com.viatour.server.models.Day;
import com.viatour.server.repositories.DayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DayController {

    @Autowired
    DayRepository dayRepository;

    @GetMapping(value = "/days")
    public ResponseEntity<List<Day>> getAllDays() {
        return new ResponseEntity<>(dayRepository.findAll(), HttpStatus.OK);
    }
}
