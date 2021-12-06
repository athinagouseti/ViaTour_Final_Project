package com.viatour.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "id")
    private String id; // Matches with UID in Firebase
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @JsonIgnoreProperties({"users"})
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "trips_user",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="trip_id", nullable = false, updatable = false)}
    )
    private List<Trip> trips;
    @JsonIgnoreProperties({""})
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "locations_wishList",
            joinColumns = {@JoinColumn(name = "wishList_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="location_id", nullable = false, updatable = false)}
    )
    private List<Location> wishList;

    public User(String id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.trips = new ArrayList<>();
        this.wishList = new ArrayList<>();
    }

    public User() {}

    public String getId() {
        return id;
    }

    // No setter for id, so that it doesn't create opportunities for ID mismatches with Firebase

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Trip> getTrips() {
        return trips;
    }

    public void setTrips(List<Trip> trips) {
        this.trips = trips;
    }

    public List<Location> getWishList() {
        return wishList;
    }

    public void setWishList(List<Location> wishList) {
        this.wishList = wishList;
    }

    public void joinTrip(Trip trip) {
        this.trips.add(trip);
    }

    public void addToWishList(Location location) {
        this.wishList.add(location);
    }
}
