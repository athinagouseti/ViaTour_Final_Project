package com.viatour.server;

//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.Response;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.Resource;

public class CovidRestrictionsTest {
    OkHttpClient client = new OkHttpClient().newBuilder()
            .build();
    MediaType mediaType = MediaType.parse("application/json");
    RequestBody body = RequestBody.create(mediaType, "{\n    \"currencyCode\": \"USD\",\n    \"originDestinations\": [\n        {\n            \"id\": \"1\",\n            \"originLocationCode\": \"BOS\",\n            \"destinationLocationCode\": \"MAD\",\n            \"departureDateTimeRange\": {\n                \"date\": \"2021-11-01\",\n                \"time\": \"10:00:00\"\n            }\n        },\n        {\n            \"id\": \"2\",\n            \"originLocationCode\": \"MAD\",\n            \"destinationLocationCode\": \"BOS\",\n            \"departureDateTimeRange\": {\n                \"date\": \"2021-11-18\",\n                \"time\": \"17:00:00\"\n            }\n        }\n    ],\n    \"travelers\": [\n        {\n            \"id\": \"1\",\n            \"travelerType\": \"ADULT\",\n            \"fareOptions\": [\n                \"STANDARD\"\n            ]\n        },\n        {\n            \"id\": \"2\",\n            \"travelerType\": \"CHILD\",\n            \"fareOptions\": [\n                \"STANDARD\"\n            ]\n        }\n    ],\n    \"sources\": [\n        \"GDS\"\n    ],\n    \"searchCriteria\": {\n        \"maxFlightOffers\": 2,\n        \"flightFilters\": {\n            \"cabinRestrictions\": [\n                {\n                    \"cabin\": \"BUSINESS\",\n                    \"coverage\": \"MOST_SEGMENTS\",\n                    \"originDestinationIds\": [\n                        \"1\"\n                    ]\n                }\n            ],\n            \"carrierRestrictions\": {\n                \"excludedCarrierCodes\": [\n                    \"AA\",\n                    \"TP\",\n                    \"AZ\"\n                ]\n            }\n        }\n    }\n}");
    Request request = new Request.Builder()
            .url("https://test.api.amadeus.com/v2/shopping/flight-offers")
            .method("POST", body)
            .addHeader("Content-Type", "application/json")
            .addHeader("X-HTTP-Method-Override", "GET")
            .build();
    Response response = client.newCall(request).execute();
}

