package com.viatour.server.components;

import com.viatour.server.models.*;
import com.viatour.server.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

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

    @Autowired
    ActivityRepository activityRepository;

    @Autowired
    DayRepository dayRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        Location paris = new Location("ChIJD7fiBh9u5kcRYJSMaMOCCwQ", 48.856592, 2.341309, "Paris");
        locationRepository.save(paris);

        Location london = new Location("ChIJdd4hrwug2EcRmSrV3Vo6llI",51.506108, -0.127992, "London");
        locationRepository.save(london);

        Location vienna = new Location("ChIJn8o2UZ4HbUcRRluiUYrlwv0",48.209839, 16.368413, "Vienna");
        locationRepository.save(vienna);

        User carlos = new User("abcdefgh", "Carlos", "Zubillaga");
        userRepository.save(carlos);

        User oscar = new User("ijklmnop", "Oscar", "Webber");
        userRepository.save(oscar);

        Trip euroTrip = new Trip("Europe");
        tripRepository.save(euroTrip);

        Trip secondTrip = new Trip("Asia");
        tripRepository.save(secondTrip);
        secondTrip.setLength(5);
        List<Day> days = secondTrip.createBlankItinerary();
        dayRepository.saveAll(days);

        byte[] content = new byte[0];
        Image eifelTower = new Image("The Eifel Tower", paris);
        imageRepository.save(eifelTower);


        Day day = new Day(euroTrip);
        day.setDate(new Date(System.currentTimeMillis()));
        dayRepository.save(day);

        Activity activity = new Activity(day);
        activity.setDescription("Visiting city centre");
        activity.setTimeSlot(new Time(System.currentTimeMillis()));
        activity.setLocation(paris);
        activityRepository.save(activity);

        day.addActivity(activity);


        carlos.addToWishList(paris);
        oscar.addToWishList(paris);

        euroTrip.addUser(carlos);
        euroTrip.addUser(oscar);
        carlos.joinTrip(euroTrip);
        oscar.joinTrip(euroTrip);
        euroTrip.addImage(eifelTower);
        euroTrip.setStartingDate(new Date(1638316800000L));
        euroTrip.setEndDate(new Date(1638748800000L));
        euroTrip.setLength();



        userRepository.save(carlos);
        userRepository.save(oscar);
        tripRepository.save(euroTrip);
        dayRepository.save(day);
    }
}
