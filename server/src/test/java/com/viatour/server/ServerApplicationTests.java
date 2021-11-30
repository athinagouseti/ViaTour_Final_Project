package com.viatour.server;

import com.viatour.server.models.Image;
import com.viatour.server.models.Location;
import com.viatour.server.models.Trip;
import com.viatour.server.models.User;
import com.viatour.server.repositories.ImageRepository;
import com.viatour.server.repositories.LocationRepository;
import com.viatour.server.repositories.TripRepository;
import com.viatour.server.repositories.UserRepository;
import org.junit.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ServerApplicationTests {




	@Autowired
	LocationRepository locationRepository;

	@Autowired
	ImageRepository imageRepository;

	@Autowired
	TripRepository tripRepository;

	@Autowired
	UserRepository userRepository;



	@Test
	void contextLoads() {
	}

	@Test
	public void canFindUsersByWishListLocation() {
		Location paris = locationRepository.getById(1L);
		List<User> found = userRepository.findByWishList(paris);
		assertEquals(2, found.size());
	}

//	@Test
//	public void locationsPersist() {
//		Location location = new Location(55.872778, -4.256111);
//		locationRepository.save(location);
//		assertEquals(2, locationRepository.findAll().size());
//	}
//
//	@Test
//	public void imagesPersist() {
//		Location location = new Location(55.872778, -4.256111);
//		locationRepository.save(location);
//		byte[] content = new byte[0];
//		Image image = new Image(content, "image", location);
//		imageRepository.save(image);
//		assertEquals(2, imageRepository.findAll().size());
//	}
//	@Test
//	public void tripsPersist() {
//		Trip trip = new Trip("Europe");
//		tripRepository.save(trip);
//		assertEquals(2, tripRepository.findAll().size());
//	}
//
//	@Test
//	public void usersPersist() {
//		User user = new User("czubillaga", "Carlos", "Zubillaga", "car.zubillaga@gmail.com", "Scar!et1");
//		userRepository.save(user);
//		assertEquals(1, userRepository.findAll().size());
//	}
//
//	@Test
//	public void canAddLocationToTrip() {
//		Location location = new Location(55.872778, -4.256111);
//		locationRepository.save(location);
//		Trip trip = new Trip("Europe");
//		tripRepository.save(trip);
//		trip.addLocation(location);
//		tripRepository.save(trip);
//		assertEquals(1, trip.getLocations().size());
//		assertEquals(55.872778, trip.getLocations().get(0).getLatitude());
//	}
//
//	@Test
//	public void canAddUserToTrip() {
//		User user = new User("czubillaga", "Carlos", "Zubillaga", "car.zubillaga@gmail.com", "Scar!et1");
//		userRepository.save(user);
//		Trip trip = new Trip("Europe");
//		tripRepository.save(trip);
//		trip.addUser(user);
//		tripRepository.save(trip);
//		assertEquals(1, trip.getUsers().size());
//	}
//
//	@Test
//	public void canAddImageToTrip() {
//		Location location = new Location(55.872778, -4.256111);
//		locationRepository.save(location);
//		byte[] content = new byte[0];
//		Image image = new Image(content, "image", location);
//		imageRepository.save(image);
//		Trip trip = new Trip("Europe");
//		tripRepository.save(trip);
//		trip.addImage(image);
//		tripRepository.save(trip);
//		assertEquals(1, trip.getImages().size());
//	}

}
