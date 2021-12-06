import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import auth from '@react-native-firebase/auth'
import userWishlistService from "../../helpers/userWishlistService";

const WishlistDestination = ({ route }) => {
    const { placeId } = route.params
    console.log(placeId);
    const [location, setLocation] = useState(null);
    const [city, setCity] = useState(null);
    const [amadeusToken, setAmadeusToken] = useState(null);
    const [restrictionData, setRestrictionData] = useState(null);

    const fetchLocationData = () => {
        setLocation(null)
        const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&sensor=false&key=AIzaSyCz8SUN9oI8b5YJ5ZdA5Jry_2sFRsm3xsw`
        fetch(url)
            .then(res => res.json())
            .then(data => setLocation(parseLocationData(data)))
            .catch((error) => console.error(error))
    }

    const fetchAmadeusToken = () => {
        setAmadeusToken(null)
        fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
        body: "grant_type=client_credentials&client_id=ISLq5IWOensIl0adbLpkSRKbaGDwgyUt&client_secret=Ay391ITUr44mKrQu",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        method: "POST"})          
            .then(res => res.json())
            .then(data => setAmadeusToken(data.access_token))
            .catch(console.error)
        console.log(amadeusToken)
    }

    const fetchCityData = () => {   
        fetchLocationData()
        fetchAmadeusToken()
        amadeusToken? (location? fetch(`https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${location.cityName}&countryCode=${location.countryID}`, {
              headers: {
              Authorization: `Bearer ${amadeusToken}`}})
              .then(res => res.json())
              .then(data => setCity(data.data[0].iataCode))
              .catch(console.error):fetchLocationData()):fetchAmadeusToken()
        console.log(city)
      }

    const fetchCovidData = () => {
        console.log("location---", location)
        console.log("city----", city);
        console.log("restrictions----", restrictionData);
        amadeusToken? (location? fetch(`https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=${location.countryID}&cityCode=${city}`, {
            headers: {
            Authorization: `Bearer ${amadeusToken}`}})
            .then(res => res.json())
            .then(data => setRestrictionData(data))
            .catch(console.error):fetchLocationData()):fetchAmadeusToken()
    }

    // const pointsOfInterest = () => {
    //     console.log("location---", location)
    //     console.log("city----", city);
    //     console.log("restrictions----", restrictionData);
    //     amadeusToken? (location? fetch(`https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=41.397158&longitude=2.160873&radius=2`, {
    //         headers: {
    //         Authorization: `Bearer ${amadeusToken}`}})
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(console.error):fetchLocationData()):fetchAmadeusToken()
    // }

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
        fetchAmadeusToken()
        fetchLocationData()
        fetchCityData()
        fetchCovidData()
        // pointsOfInterest()

        console.log(location)
        console.log(amadeusToken)
        console.log(city)
        console.log(restrictionData);
    }, [])

    const isLoggedIn = auth().currentUser != undefined

    const parseLocationData = (data) => {
        const resultEntry = data.results[0]

        if (!resultEntry) return undefined

        const cityName = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("locality"))?.long_name
        const countryName = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("country"))?.long_name
        const countryID = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("country"))?.short_name

        if (!cityName || !countryName) return undefined

        return {
            cityName,
            countryName,
            countryID,
            place_id: resultEntry.place_id,
            latitude: resultEntry.geometry.location.lat,
            longitude: resultEntry.geometry.location.lng
        }
    }

    // const parseRestrictionData = (data) => {
    //     const resultEntry = data

    //     if (!resultEntry) return undefined

    //     const text = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("locality"))?.long_name
    //     const countryName = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("country"))?.long_name
    //     const countryID = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("country"))?.short_name

    //     if (!cityName || !countryName) return undefined

    //     return {
    //         cityName,
    //         countryName,
    //         countryID,
    //         place_id: resultEntry.place_id,
    //         latitude: resultEntry.geometry.location.lat,
    //         longitude: resultEntry.geometry.location.lng
    //     }
    // }

    const addToWishlist = () => {
        const payload = {
            placeId: location.place_id,
            latitude: location.latitude,
            longitude: location.longitude,
            name: `${location.cityName}, ${location.countryName}`
        }
        userWishlistService.post(payload)
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