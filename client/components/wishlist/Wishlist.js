import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import DraggableFlatList  from "react-native-draggable-flatlist";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import locationService from "../../helpers/locationService";
import auth from '@react-native-firebase/auth'

const Wishlist = () => {

    const [data, setData] = useState([
        {
            order: 1,
            label: 'Tokyo',
          },
          {
            order: 2,
            label: 'Denver',
          },
          {
            order: 3,
            label: 'Rome',
          },
          {
            order: 4,
            label: 'Berlin',
          },
          {
            order: 5,
            label: 'Paris',
          },
          {
            order: 6,
            label: 'London',
          }
    ])
    const [loading, setLoading] = useState(true)

    const isFocused = useIsFocused();
    const isLoggedIn = auth().currentUser != undefined

    const fetchLocationData = () => {
      locationService.get()
      .then((data) => {setData(data) ; setLoading(false)})
      .catch((error) => console.error(error))
    }

    useEffect(() => {
      if(isFocused && isLoggedIn) {
      fetchLocationData()
    }}, [isFocused])

    const navigation = useNavigation();

    const navigateToDestination = (data) => {
      if(data.place_id) {
        navigation.navigate("WishlistDestination", {placeId:data.place_id})
      } else {
        Alert.alert("Location id not found")
      }
    }

    const renderItem = ({ item, index, drag, isActive }) => (
        <TouchableOpacity onLongPress={drag} >
          <Text style={styles.text} >{item.name}</Text>
        </TouchableOpacity>
      );

    const wishlistBody = () => {
      if(!isLoggedIn){
        return <Text>You need to be logged in to view your wishlist</Text>
      }
      if(loading) {
        return <Text>Loading...</Text>
      }
      return <DraggableFlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={(item, index) => item.order.toString()}
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
       flexDirection: 'column'
      },
    text: {
        borderWidth: 4,
        borderColor: '#fad02c',
        borderRadius: 20,
        padding: 30,
        marginTop: 15,
        margin: 30,
        fontWeight: 'bold',
        color: '#333652',
        fontSize: 25
    }
  });


export default Wishlist;