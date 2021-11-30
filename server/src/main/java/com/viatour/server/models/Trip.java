package com.viatour.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

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
            name = "locations_trips",
            joinColumns = {@JoinColumn(name = "trip_id", nullable = true, updatable = true)},
            inverseJoinColumns = {@JoinColumn(name="location_id", nullable = true, updatable = true)}
    )
    private List<Location> locations;
    @JsonBackReference
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_trips",
            joinColumns = {@JoinColumn(name = "trip_id", nullable = true, updatable = true)},
            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = true, updatable = true)}
    )
    private List<User> users;
    @JsonBackReference
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "images_trips",
            joinColumns = {@JoinColumn(name = "trip_id", nullable = true, updatable = true)},
            inverseJoinColumns = {@JoinColumn(name="image_id", nullable = true, updatable = true)}
    )
    private List<Image> images;

    public Trip(String name) {
        this.name = name;
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
}
