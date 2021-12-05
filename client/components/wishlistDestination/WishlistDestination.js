import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import auth from '@react-native-firebase/auth'
import userWishlistService from "../../helpers/userWishlistService";
import { useNavigation } from "@react-navigation/native";

const WishlistDestination = ({ route }) => {
    const { placeId, title } = route.params
    console.log(placeId);
    const [location, setLocation] = useState(null);
    const [alreadyOnWishlist, setAlreadyOnWishlist] = useState(false);

    const fetchLocationData = () => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&sensor=false&key=AIzaSyCz8SUN9oI8b5YJ5ZdA5Jry_2sFRsm3xsw`
        fetch(url)
            .then(res => res.json())
            .then(data => setLocation(parseLocationData(data)))
            .catch((error) => console.error(error))
    }

    const checkIfLocationOnWishlist = () => {
        getUserWishlist().then(data => {
            if (data.some(item => item.placeId === placeId)) {
                setAlreadyOnWishlist(true)
            }
        })
    }

    const getUserWishlist = async () => userWishlistService.get()


    useEffect(() => {
        fetchLocationData()
        checkIfLocationOnWishlist()
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
                location ?
                    (
                        <> 
                            <Text>
                                {location.cityName}
                            </Text>
                            <Text>
                                {location.countryName}
                            </Text>

                            {isLoggedIn && !alreadyOnWishlist &&  <TouchableOpacity onPress={addToWishlist} >
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