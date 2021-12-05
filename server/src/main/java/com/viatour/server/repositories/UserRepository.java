package com.viatour.server.repositories;

import com.viatour.server.models.Location;
import com.viatour.server.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, String> { // ID is String type to match Firebase
    List<User> findByWishList(Location location);
}
