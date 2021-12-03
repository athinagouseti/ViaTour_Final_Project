import React from "react";
import { View, Alert } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from "@react-navigation/native";

const Wishlist = () => {

  const navigation = useNavigation();

  const navigateToDestination = (data) => {
    if(data.place_id) {
      navigation.navigate("WishlistDestination", {placeId:data.place_id})
    } else {
      Alert.alert("Location id not found")
    }
  }

    return (
        <View>
            <View style={{ position: 'absolute', top: 10, width: '100%' }}>
            <GooglePlacesAutocomplete placeholder='Search' onPress={navigateToDestination} 
            query={{ 
              key: 'AIzaSyCz8SUN9oI8b5YJ5ZdA5Jry_2sFRsm3xsw',
              language: 'en',
              type: "(cities)"
              }}/>
            </View>
        </View>
    )
}

export default Wishlist;