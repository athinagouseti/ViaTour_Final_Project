package com.viatour.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.viatour.server.repositories.DayRepository;
import com.viatour.server.repositories.TripRepository;
import org.hibernate.annotations.Cascade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;



@Entity
@Table(name = "trips")
public class Trip {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @JsonIgnoreProperties({"users", "trip"})
    @OneToMany(mappedBy = "trip", fetch = FetchType.LAZY)
    private List<Day> itinerary;
    @JsonBackReference
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_trip",
            joinColumns = {@JoinColumn(name = "trip_id", nullable = true, updatable = true)},
            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = true, updatable = true)}
    )
    private List<User> users;
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "images_trip",
            joinColumns = {@JoinColumn(name = "trip_id", nullable = true, updatable = true)},
            inverseJoinColumns = {@JoinColumn(name="image_id", nullable = true, updatable = true)}
    )
    private List<Image> images;
    @Column(name = "startingDate")
    private Date startingDate;
    @Column(name = "endDate")
    private Date endDate;
    @Column(name = "length")
    private int length;



    public Trip(String name) {
        this.name = name;
        this.itinerary = new ArrayList<>();
        this.users = new ArrayList<>();
        this.images = new ArrayList<>();
        this.startingDate = new Date(0L);
        this.endDate = new Date(0L);
    }

    public Trip() {}


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Day> getItinerary() {
        return itinerary;
    }

    public void setItinerary(List<Day> itinerary) {
        this.itinerary = itinerary;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public void addDay(Day day) {
        this.itinerary.add(day);
    }

    public void addUser(User user) {
        this.users.add(user);
    }

    public void addImage(Image image) {
        this.images.add(image);
    }

    public Date getStartingDate() {
        return startingDate;
    }

    public void setStartingDate(Date startingDate) {
        this.startingDate = startingDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public int getLength() {
        return length;
    }

    public void setLength() {
        Stream<LocalDate> days = startingDate.toLocalDate().datesUntil(endDate.toLocalDate());
        int length = Math.toIntExact(days.count());
        this.length = length;
    }

    public List<Day> createBlankItinerary() {
        List<Day> days = new ArrayList<>();
        for(int i = 0; i < this.length; i++) {
            Day day = new Day(this);
            days.add(day);
        }
        return days;
    }
}
