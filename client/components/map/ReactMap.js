import React, { useState, useEffect } from "react";
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, ScrollView} from 'react-native';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import auth from '@react-native-firebase/auth'
import userWishlistService from "../../helpers/userWishlistService";
import { log } from "react-native-reanimated";

const ReactMap = () => {

  const [data, setData] = useState([])

  const isFocused = useIsFocused();
  const isLoggedIn = auth().currentUser != undefined

  const fetchLocationData = () => {
    userWishlistService.get()
    .then((data) => {setData(data)})
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    if(isFocused && isLoggedIn) {
    fetchLocationData()
  }}, [isFocused])

  const navigation = useNavigation();

  const markerData = data.map(location => {
    return <Marker coordinate = {{latitude: location.latitude ,longitude: location.longitude}}
    pinColor = {"red"} 
    title={location.name}
    key={location.placeId}
    description={"Tap to view destination"}
    onCalloutPress={() =>{navigation.navigate("WishlistTab", {screen: "WishlistDestination", initial: false, params: {placeId: location.placeId, title: location.name}})}} 
    />
  })

  return(
      <ScrollView>
          <MapView loadingEnabled={true} style={styles.map}
            initialRegion={{
              latitude: 10.95615566447539,
              longitude: 26.52981279124384,
              latitudeDelta: 144.22706832792844,
              longitudeDelta: 102.99184760925405,
            }}>
           {markerData}
          </MapView>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default ReactMap;