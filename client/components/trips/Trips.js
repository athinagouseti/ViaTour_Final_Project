import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import NewTrip from "./NewTrip";

const Trips = () => {

    const navigation = useNavigation();

    const handleAdd = () => {
        navigation.navigate("NewTrip")
      }

    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.container} >
            <Text style={styles.heading}>My Upcoming Trips</Text>
            <TouchableOpacity onPress={handleAdd}>
                <Image style={styles.add} source={require('../navigation_icons/add_trip.png')}/>
            </TouchableOpacity>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
            pagingEnabled={true}
            style={styles.imageContainer}>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/pest.jpeg')} style={styles.upcoming}/>
            </TouchableOpacity>
            <Text style={styles.text}>Budapest - 21/10/2021 - 5 Days</Text>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/Antwerp.jpeg')} style={styles.upcoming}/>
            </TouchableOpacity>
            <Text style={styles.text}>Antwerp - 15/03/2022 - 3 Days</Text>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/Stockholm.jpeg')} style={styles.upcoming}/>
            </TouchableOpacity>
            <Text style={styles.text}>Stockholm - 16/08/2022 - 7 Days</Text>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/Berlin.jpeg')} style={styles.upcoming}/>
            </TouchableOpacity>
            <Text style={styles.text}>Berlin - 10/07/2022 - 4 Days</Text>
            </View>
            </ScrollView>
        </View>

        <View style={styles.container}>
            <Text style={styles.heading}>Memories</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.imageContainer}>
            <TouchableOpacity>
            <ImageBackground source={require('../trip_icons/Bratislava.jpeg')} style={styles.images} imageStyle={{borderRadius: 10}}>
            <View>
            <Text style={styles.imagetext}>Slovakia - 2020</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
            <ImageBackground source={require('../trip_icons/Budapest.jpeg')} style={styles.images} imageStyle={{borderRadius: 10}}>
            <View>
            <Text style={styles.imagetext}>Hungary - 2019</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
            <ImageBackground source={require('../trip_icons/Canada.jpeg')} style={styles.images} imageStyle={{borderRadius: 10}}>
            <View>
            <Text style={styles.imagetext}>Canada - 2019</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
            <ImageBackground source={require('../trip_icons/stock.jpg')} style={styles.images} imageStyle={{borderRadius: 10}}>
            <View>
            <Text style={styles.imagetext}>Sweden - 2018</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
            </ScrollView>
        </View>

        <View style={styles.container}>
            <Text style={styles.heading}>Favourite Places</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.imageContainer}>
          <TouchableOpacity>
            <ImageBackground source={require('../trip_icons/ams.jpg')} style={styles.images} imageStyle={{borderRadius: 10}}>
            <View>
            <Text style={styles.imagetext}>Amsterdam</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
            <ImageBackground source={require('../trip_icons/dunnet.jpeg')} style={styles.images} imageStyle={{borderRadius: 10}}>
            <View>
            <Text style={styles.imagetext}>Scotland</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
            <ImageBackground source={require('../trip_icons/Sweden.jpeg')} style={styles.images} imageStyle={{borderRadius: 10}}>
            <View>
            <Text style={styles.imagetext}>Lake Norrviken</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
            <ImageBackground source={require('../trip_icons/Ramelton.jpeg')} style={styles.images} imageStyle={{borderRadius: 10}}>
            <View>
            <Text style={styles.imagetext}>Ireland</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
            </ScrollView>
        </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    imageContainer: {
        flex: 1,
        marginHorizontal: 10,
        shadowColor: '#333652',
        shadowOffset: { height: 1},
        shadowOpacity: 0.5,
    },
    heading: {
        fontWeight: 'bold', 
        color: '#333652',
        textTransform: 'uppercase',
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18
    },
    upcoming: {
        width: 350,
        height: 350,
        marginBottom: 15,
        marginHorizontal: 10,
        borderRadius: 10
    },
    images: {
        width: 350,
        height: 225,
        marginBottom: 15,
        marginHorizontal: 10,
        borderRadius: 10
    },
    text:{
        alignItems:'flex-start',
        justifyContent:'center',
        marginLeft: 10,
        color: '#333652',
        fontSize: 20,
        paddingBottom: 20
    },
    imagetext:{
        textAlign:'center',
        justifyContent:'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        paddingTop: 150
    },
    add:{
        width: 60,
        height: 50,
        marginTop: -50,
        marginLeft: 320
    }
  });

export default Trips;