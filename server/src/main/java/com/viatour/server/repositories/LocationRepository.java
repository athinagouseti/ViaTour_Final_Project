package com.viatour.server.repositories;

import com.viatour.server.models.Location;
import com.viatour.server.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Long> {

    List<Location> findAllByUserId(String user_id);
}
