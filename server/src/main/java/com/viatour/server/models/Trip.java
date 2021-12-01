package com.viatour.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.Cascade;

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
    @JsonBackReference
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "locations_trip",
            joinColumns = {@JoinColumn(name = "trip_id", nullable = true, updatable = true)},
            inverseJoinColumns = {@JoinColumn(name="location_id", nullable = true, updatable = true)}
    )
    private List<Location> locations;
    @JsonBackReference
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_trip",
            joinColumns = {@JoinColumn(name = "trip_id", nullable = true, updatable = true)},
            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = true, updatable = true)}
    )
    private List<User> users;
    @JsonBackReference
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
        this.locations = new ArrayList<>();
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

    public List<Location> getLocations() {
        return locations;
    }

    public void setLocations(List<Location> locations) {
        this.locations = locations;
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

    public void addLocation(Location location) {
        this.locations.add(location);
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
}
