package com.viatour.server.models;

public class Image {

    private Long id;
    private byte[] content;
    private String name;
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
