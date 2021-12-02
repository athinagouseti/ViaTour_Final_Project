import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceSearch from 'react-native-placesearch';
import { log } from "react-native-reanimated";

const Wishlist = () => {
    
    const [location, setLocation] = useState(null);

    const [placeData, setPlaceData] = useState(null);
  
    // const onPressLocation = function () {
    //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${locationData.place_id}&sensor=false&key=AIzaSyCz8SUN9oI8b5YJ5ZdA5Jry_2sFRsm3xsw`)
    //   .then(res => res.json())
    //   .then(geoData => setLocation(geoData))
    // }

    const fetchLocationData = () => {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeData.place_id}&sensor=false&key=AIzaSyCz8SUN9oI8b5YJ5ZdA5Jry_2sFRsm3xsw`
      // fetch("https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJxRO7WVEDdkgRrGM1fCYoHqY&sensor=false&key=AIzaSyCz8SUN9oI8b5YJ5ZdA5Jry_2sFRsm3xsw")
      console.log(url);
      fetch(url)
      .then(res => res.json())
      .then(data => setLocation(locationData(data)))
      .catch(console.error)
    }

    const locationData = (data) => {
          return filterLocation = {
              place_id: data.results[0].place_id,
              latitude: data.results[0].geometry.location.lat,
              longitute: data.results[0].geometry.location.lat
          }
    }

    useEffect(() => {
      console.log(location);
    })

    useEffect(() => {
      placeData && fetchLocationData()
    }, [placeData])

    return (
        <View>
            {/* <View style={{ position: 'absolute', top: 10, width: '100%' }}>
              <TextInput
                style={{
                  borderRadius: 100,
                  margin: 10,
                  color: '#343652',
                  borderColor: '#343652',
                  backgroundColor: '#FFF',
                  borderWidth: 5,
                  height: 45,
                  paddingHorizontal: 10,
                  fontSize: 18,
                }}
                placeholder={'Search'}
                placeholderTextColor={'#343652'}
              />
            </View>  */}



            <View style={{ position: 'absolute', top: 10, width: '100%' }}>
            <GooglePlacesAutocomplete
              placeholder='Search'
              onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
              // console.log(data);
              setPlaceData(data);
              }}
              query={{
              key: 'AIzaSyCz8SUN9oI8b5YJ5ZdA5Jry_2sFRsm3xsw',
              language: 'en',
              }}

            />
            </View>


            {/* <View>
              <PlaceSearch 
                apikey="AIzaSyCz8SUN9oI8b5YJ5ZdA5Jry_2sFRsm3xsw" // required *
                SelectedAddress={(data)=>console.log(data)} // required *
                onClose={(data)=>console.log(data)}
              />
            </View> */}
        </View>
    )
}

export default Wishlist;