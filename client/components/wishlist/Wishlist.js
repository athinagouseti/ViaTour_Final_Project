import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import DraggableFlatList  from "react-native-draggable-flatlist";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import userWishlistService from "../../helpers/userWishlistService";
import auth from '@react-native-firebase/auth'

const Wishlist = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const isFocused = useIsFocused();
    const isLoggedIn = auth().currentUser != undefined

    const fetchLocationData = () => {
      userWishlistService.get()
      .then((data) => {setData(data) ; setLoading(false)})
      .catch((error) => console.error(error))
    }

    useEffect(() => {
      if(isFocused && isLoggedIn) {
      fetchLocationData()
    }}, [isFocused])

    const navigation = useNavigation();

    const navigateToDestination = (data) => {
      const placeId = data.place_id ?? data.placeId
      const title = data.description ?? data.name
      if(placeId) {
        navigation.navigate("WishlistDestination", {placeId, title})
      } else {
        Alert.alert("Location id not found")
      }
    }

    const renderItem = ({ item, index, drag, isActive }) => (
      <View>
        <TouchableOpacity onLongPress={drag} onPress={() => navigateToDestination(item)} >
          <Text style={styles.item} >{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.remove} source={require('../navigation_icons/remove_trip.png')}/>
        </TouchableOpacity>
        </View>
      );

    const wishlistBody = () => {
      if(!isLoggedIn){
        return <Text style={styles.text}>You need to be logged in to view your wishlist</Text>
      }
      if(loading) {
        return <Text>Loading...</Text>
      }
      if(data.length === 0){
        return <Text>You have no destinations, search and add destinations to your wishlist</Text>
      }
      return <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.placeId}
        onDragEnd={({data} ) => setData(data )}
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 150 }}
        />
    }
    
    return (
      <View style={styles.container}>
        <View style={{ width: '100%', marginVertical: 10, zIndex: 1000, height: 50, }}>
            <GooglePlacesAutocomplete placeholder='Add a destination...' onPress={navigateToDestination} 
              query={{ 
                key: 'AIzaSyCz8SUN9oI8b5YJ5ZdA5Jry_2sFRsm3xsw',
                language: 'en',
                type: "(cities)"
                }}
                styles={{
                  container: {
                    position: "absolute",
                    width: "100%",
                    paddingHorizontal: 10
                  },
                }}
                />
        </View>
        <View style={{ zIndex: 1, flexGrow: 1 }}>
        {wishlistBody()}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#333652',
    shadowOffset: { height: 0},
    shadowOpacity: 0.5,
    flexDirection: 'column'
   },
 item: {
     borderWidth: 5,
     borderColor: '#fad02c',
     backgroundColor: '#f3f3f2',
     // backgroundColor: '#fad02c',
     overflow: 'hidden',
     borderRadius: 20,
     padding: 30,
     marginTop: 15,
     margin: 15,
     fontWeight: 'bold',
     color: '#333652',
     fontSize: 25
 },
 text:{
   fontSize: 16,
   marginLeft: 30,
   marginTop: 20

 },
 remove:{
     width: 50,
     height: 30,
     marginTop: -80,
     marginLeft: 310,
     tintColor: 'orange'
 }
});


export default Wishlist;