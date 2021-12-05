import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Request from "../../helpers/service"
import auth from '@react-native-firebase/auth'
import locationService from "../../helpers/locationService";

const WishlistDestination = ({ route }) => {
    const { placeId } = route.params
    // console.log(placeId);
    const [location, setLocation] = useState(null);
    const [amadeusToken, setAmadeusToken] = useState(null);
    const [restrictionData, setRestrictionData] = useState(null);

    const fetchLocationData = () => {
        console.log(location)
        console.log(amadeusToken)
        const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&sensor=false&key=AIzaSyCz8SUN9oI8b5YJ5ZdA5Jry_2sFRsm3xsw`
        fetch(url)
            .then(res => res.json())
            .then(data => setLocation(parseLocationData(data)))
            .catch(console.error)
    }

    // const fetchAmadeusToken = () => {
    //     var urlencoded = new URLSearchParams();
    //     urlencoded.append("client_id", " ISLq5IWOensIl0adbLpkSRKbaGDwgyUt");
    //     urlencoded.append("client_secret", "Ay391ITUr44mKrQu");
    //     urlencoded.append("grant_type", "client_credentials");
    
    //     var requestOptions = {
    //         method: 'POST',
    //         body: urlencoded,
    //         redirect: 'follow'
    //     };
    
    //     fetch("https://test.api.amadeus.com/v1/security/oauth2/token", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // }

    const fetchAmadeusToken = () => {
        fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
        body: "grant_type=client_credentials&client_id=ISLq5IWOensIl0adbLpkSRKbaGDwgyUt&client_secret=Ay391ITUr44mKrQu",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        method: "POST"})          
            .then(res => res.json())
            .then(data => setAmadeusToken(data.access_token))
    }

    const fetchCityData = () => {   
        fetch(`https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${location.cityName}&countryCode=GB`, {
              headers: {
              Authorization: `Bearer ${amadeusToken}`}})
              .then(res => res.json())
              .then(data => console.log(data))
              .catch(console.error)
      }

    const fetchCovidData = () => {
        fetch(`https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=GB&cityCode=GLA`, {
            headers: {
            Authorization: `Bearer ${amadeusToken}`}})
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(console.error)
    }

    // const fetchTravelRecommendations = () => { 
    //     fetch("https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=41.397158&longitude=-4.251806&radius=2", {
    //         headers: {
    //         Authorization: `Bearer ${amadeusToken}`}})
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(console.error)
    // }

    // const fetchCovidData = () => {
    //     fetch("https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=GB&cityCode=GLA", {
    //     body: "grant_type=client_credentials&client_id=ISLq5IWOensIl0adbLpkSRKbaGDwgyUt&client_secret=Ay391ITUr44mKrQu",
    //     headers: {"Content-Type": "application/x-www-form-urlencoded"},
    //     method: "POST"})
    //         .then(res => res.json())
    //         .then(data => setRestrictionData(data))
    //         .catch(console.error)
    // }

    useEffect(() => {
        fetchLocationData()
        fetchAmadeusToken()
        // fetchTravelRecommendations()
        fetchCityData()
        fetchCovidData()
    }, [])

    const isLoggedIn = auth().currentUser != undefined


    const parseLocationData = (data) => {
        const resultEntry = data.results[0]

        if (!resultEntry) return undefined

        const cityName = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("locality"))?.long_name
        const countryName = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("country"))?.long_name

        if (!cityName || !countryName) return undefined

        
        return {
            cityName,
            countryName,
            place_id: resultEntry.place_id,
            latitude: resultEntry.geometry.location.lat,
            longitude: resultEntry.geometry.location.lng
        }
    }

    const addToWishlist = () => {
        const payload = {
            place_id: location.place_id,
            latitude: location.latitude,
            longitude: location.longitude
        }
        locationService.post(payload)
            .then(() => console.log("Added to wishlist"))
            .catch((error) => console.log(error))
    }



    return (
        <View>
            {
                location ?
                    (
                        <> 
                            <Text>
                                {location.cityName}
                            </Text>
                            <Text>
                                {location.countryName}
                            </Text>

                            {isLoggedIn && <TouchableOpacity onPress={addToWishlist} >
                            <Text>Add to Wishlist</Text>
                            </TouchableOpacity>}
                        </>
                    ) :
                    (
                        <Text>Loading...</Text>
                    )
            }

        </View>
    )
}

export default WishlistDestination;