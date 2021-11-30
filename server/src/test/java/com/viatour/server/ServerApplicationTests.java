package com.viatour.server;

import com.viatour.server.models.Image;
import com.viatour.server.models.Location;
import com.viatour.server.repositories.ImageRepository;
import com.viatour.server.repositories.LocationRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ServerApplicationTests {

	@Autowired
	LocationRepository locationRepository;

	@Autowired
	ImageRepository imageRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void locationsPersist() {
		Location location = new Location(55.872778, -4.256111);
		locationRepository.save(location);
		assertEquals(1, locationRepository.findAll().size());
	}

	@Test
	public void imagesPersist() {
		Location location = new Location(55.872778, -4.256111);
		locationRepository.save(location);
		byte[] content = new byte[0];
		Image image = new Image(content, "image", location);
		imageRepository.save(image);
		assertEquals(1, imageRepository.findAll().size());
	}
}
