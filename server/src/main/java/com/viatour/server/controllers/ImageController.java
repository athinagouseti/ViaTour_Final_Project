package com.viatour.server.controllers;

import com.viatour.server.models.Image;
import com.viatour.server.repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ImageController {

    @Autowired
    ImageRepository imageRepository;

    @GetMapping(value = "/images")
    public ResponseEntity<List<Image>> getAllImages() {
        return new ResponseEntity<>(imageRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/images/{id}")
    public ResponseEntity getImage(@PathVariable Long id) {
        return new ResponseEntity(imageRepository.findById(id), HttpStatus.OK);
    }
}
