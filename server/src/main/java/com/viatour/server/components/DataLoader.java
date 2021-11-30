package com.viatour.server.components;

import com.viatour.server.models.Location;
import com.viatour.server.models.Trip;
import com.viatour.server.models.User;
import com.viatour.server.repositories.ImageRepository;
import com.viatour.server.repositories.LocationRepository;
import com.viatour.server.repositories.TripRepository;
import com.viatour.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    TripRepository tripRepository;

    @Autowired
    UserRepository userRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        Location paris = new Location(48.856592, 2.341309);
        locationRepository.save(paris);

        Location london = new Location(51.506108, -0.127992);
        locationRepository.save(london);

        Location vienna = new Location(48.209839, 16.368413);
        locationRepository.save(vienna);

        User carlos = new User("czubillaga", "Carlos", "Zubillaga", "car.zubillaga@gmail.com", "Scar!et1");
        userRepository.save(carlos);
        User oscar = new User("osweso", "Oscar", "Webber", "osweso@gmail.com", "bojangles");
        userRepository.save(oscar);

        Trip euroTrip = new Trip("Europe");
        tripRepository.save(euroTrip);

        euroTrip.addLocation(paris);
        euroTrip.addLocation(london);
        euroTrip.addLocation(vienna);

        euroTrip.addUser(carlos);
        carlos.joinTrip(euroTrip);
        oscar.joinTrip(euroTrip);

        tripRepository.save(euroTrip);
        userRepository.save(carlos);
        userRepository.save(oscar);

    }
}
