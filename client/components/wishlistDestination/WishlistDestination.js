import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import auth from '@react-native-firebase/auth'
import userWishlistService from "../../helpers/userWishlistService";
import { useNavigation,  useIsFocused  } from "@react-navigation/native";

const WishlistDestination = ({ route }) => {
    const { placeId, title } = route.params
    const [location, setLocation] = useState(null);
    const [alreadyOnWishlist, setAlreadyOnWishlist] = useState(false);
    const isFocused = useIsFocused();
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
            console.log("location----", location)
    }

    const checkIfLocationOnWishlist = () => {
        getUserWishlist()
        .then(response => response.json())
        .then(data => {
            if (data.some(item => item.placeId === placeId)) {
                setAlreadyOnWishlist(true)
            }
        })
    }

    const getUserWishlist = async () => userWishlistService.get()

    const fetchAmadeusToken = () => {
        fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
        body: "grant_type=client_credentials&client_id=cs1HmziHs2ZP3inHGQr5zASKD6NaGZAW&client_secret=GPYgkL1YaweiAXAE",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        method: "POST"})          
            .then(res => res.json())
            .then(data => setAmadeusToken(data.access_token))
            .catch(console.error)
        console.log("token---", amadeusToken)
    }

    const fetchCityData = () => {   
        fetch(`https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${location.cityName}&countryCode=${location.countryID}`, {
              headers: {
              Authorization: `Bearer ${amadeusToken}`}})
              .then(res => res.json())
              .then(data => setCity(data.data[0].iataCode))
              .catch(console.error)
        console.log("city---", city)
      }

    const fetchCovidData = () => {
        console.log("location---", location)
        console.log("city----", city);
        console.log("restrictions----", restrictionData);
        fetch(`https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=${location.countryID}&cityCode=${city}`, {
            headers: {
            Authorization: `Bearer ${amadeusToken}`}})
            .then(res => res.json())
            .then(data => setRestrictionData(data))
            .catch(console.error)
    }

    // const pointsOfInterest = () => {
    //     console.log("location---", location)
    //     console.log("city----", city);
    //     console.log("restrictions----", restrictionData);
    //     fetch(`https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=41.397158&longitude=-4.251806&radius=2`, {
    //         headers: {
    //         Authorization: `Bearer ${amadeusToken}`}})
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(console.error)
    // }

    // const fetchTravelRecommendations = () => { 
    //     fetch("https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=41.397158&longitude=-4.251806&radius=2", {
    //         headers: {
    //         Authorization: `Bearer ${amadeusToken}`}})
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(console.error)

    useEffect(() => {
        checkIfLocationOnWishlist()
    }, [])

    useEffect(() => {
        fetchAmadeusToken()
        console.log("token useEffect", amadeusToken);
    }, [])

    useEffect(() => {
        amadeusToken && fetchLocationData()
        console.log("location useEffect", location);
    }, [amadeusToken])

    useEffect(() => {
        location && fetchCityData()
        console.log("city useEffect", city);
    }, [location])

    useEffect(() => {
        city && fetchCovidData();
        console.log("covid data useEffect", restrictionData)
    }, [city])

    // useEffect(() => {
    //     city && pointsOfInterest();
    //     console.log("point of interest useEffect", restrictionData)
    // }, [city])

    const isLoggedIn = auth().currentUser != undefined

    const parseLocationData = (data) => {
        const resultEntry = data.results[0]
        console.log("result enty", resultEntry)

        if (!resultEntry) return undefined

        const cityName = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("locality"))?.long_name
        const countryName = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("country"))?.long_name
        const countryID = resultEntry.address_components.find(addressComponent => addressComponent.types.includes("country"))?.short_name
        console.log("city name", cityName)
        console.log("country id", countryID)

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
            .then(() => setAlreadyOnWishlist(true))
            .catch((error) => console.log(error))
    }



    return (
        <View>
            {
                restrictionData ?
                    (
                        <> 
                        <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 150}}>
                            <Text style={styles.heading}>
                                {location.cityName}
                            </Text>
                            <Text style={styles.heading1}>
                                {location.countryName}
                            </Text>
                            {isLoggedIn && !alreadyOnWishlist &&  <TouchableOpacity onPress={addToWishlist} >
                            <Text style={styles.add}>Add to Wishlist</Text>
                            </TouchableOpacity>}
                            <ScrollView>
                            <MapView style={styles.map}
                                initialRegion={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                                }}>
                            <Marker coordinate = {{latitude: location.latitude,longitude: location.longitude}}
                                pinColor = {"red"} 
                                title={"Trip"}
                                description={"Tap to view trip"}/>
                            </MapView>
                            </ScrollView>
                            <Text style={styles.text}>{restrictionData.data.areaAccessRestriction.declarationDocuments.text.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
                            </ScrollView>
                        </>
                    ) :
                    (
                        <Text style={styles.heading1}>Loading...</Text>
                    )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontWeight: 'bold',
        color: '#333652',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 10,
    },
    heading1:{
        color: '#333652',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 10,
    },
    text:{
        color: '#333652',
        fontSize: 20,
        marginBottom: 15,
        marginTop: 20,
        textAlign: 'center',
        marginHorizontal: 20,
        borderColor: '#fad02c',
        borderWidth: 3,
        borderRadius: 20,
        padding: 10
    },
    add:{
        color: 'dodgerblue',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
    },
    map: {
        width: 350,
        height: 300,
        borderRadius: 25,
        borderColor: '#fad02c',
        borderWidth: 1,
        marginLeft: 20
    },
});

export default WishlistDestination;
