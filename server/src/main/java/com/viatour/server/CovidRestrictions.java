package com.viatour.server;

import com.amadeus.Amadeus;
import com.amadeus.Params;

import com.amadeus.exceptions.ResponseException;
import com.amadeus.referenceData.Locations;
import com.amadeus.resources.Location;



public class CovidRestrictions {
    public static void main(String[] args) throws ResponseException {
        Amadeus amadeus = Amadeus
                .builder("ISLq5IWOensIl0adbLpkSRKbaGDwgyUt", "Ay391ITUr44mKrQu")
                .build();

        Location[] locations = amadeus.referenceData.locations.get(Params
                .with("keyword", "LON")
                .and("subType", Locations.ANY));

        System.out.println(locations);
        }
    }
