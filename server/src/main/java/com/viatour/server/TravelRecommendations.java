package com.viatour.server;

import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.Location;

public class TravelRecommendations {
    public static void main(String[] args) throws ResponseException {
        Amadeus amadeus = Amadeus
                .builder("ISLq5IWOensIl0adbLpkSRKbaGDwgyUt","Ay391ITUr44mKrQu")
                .build();

        Location[] destinations = amadeus.referenceData.recommendedLocations.get(Params
                .with("cityCodes", "GLA")
                .and("travelerCountryCode", "GB"));

        if (destinations.length != 0) {
            if (destinations[0].getResponse().getStatusCode() != 200) {
                System.out.println("Wrong status code: " + destinations[0].getResponse().getStatusCode());
                System.exit(-1);
            }
            System.out.println(destinations[0]);
        }
        else {
            System.out.println("No recommendations found");
            System.exit(-1);
        }
    }
}
