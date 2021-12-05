package com.viatour.server;

import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.PointOfInterest;

public class PointsOfInterest {

    public static void main(String[] args) throws ResponseException {

        Amadeus amadeus = Amadeus
                .builder("ISLq5IWOensIl0adbLpkSRKbaGDwgyUt","Ay391ITUr44mKrQu")
                .build();

        // What are the popular places in Barcelona (based on a geolocation)
        PointOfInterest[] pointsOfInterest = amadeus.referenceData.locations.pointsOfInterest.get(Params
                .with("latitude", "41.39715")
                .and("longitude", "2.160873"));

        if (pointsOfInterest[0].getResponse().getStatusCode() != 200) {
            System.out.println("Wrong status code: " + pointsOfInterest[0].getResponse().getStatusCode());
            System.exit(-1);
        }

        System.out.println(pointsOfInterest[0]);
    }
}
