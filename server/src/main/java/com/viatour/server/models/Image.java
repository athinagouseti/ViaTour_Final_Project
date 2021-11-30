package com.viatour.server.models;

import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Lob
    @Column(name = "content")
    private byte[] content;
    @Column(name = "name")
    private String name;
    @ManyToOne
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;

    public Image(byte[] content, String name, Location location) {
        this.content = content;
        this.name = name;
        this.location = location;
    }

    public Image() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }
}
