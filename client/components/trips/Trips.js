import React from "react";
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const Trips = () => {

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.heading}>Upcoming Trips</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
            pagingEnabled={true}
            style={styles.imageContainer}>
            <Image source={require('../trip_icons/Budapest.jpeg')} style={styles.images}/>
            <Image source={require('../trip_icons/pest.jpeg')} style={styles.images}/>
            <Image source={require('../trip_icons/Stockholm.jpeg')} style={styles.images}/>
            <Image source={require('../trip_icons/stock.jpg')} style={styles.images}/>
            </ScrollView>
        </View>

        <View style={styles.container}>
            <Text style={styles.heading1}>Memories</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.imageContainer}>
            <Image source={require('../trip_icons/Sweden.jpeg')} style={styles.images1}/>
            <Image source={require('../trip_icons/pest.jpeg')} style={styles.images1}/>
            <Image source={require('../trip_icons/Stockholm.jpeg')} style={styles.images1}/>
            <Image source={require('../trip_icons/stock.jpg')} style={styles.images1}/>
            </ScrollView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold', 
        color: '#333652',
        textTransform: 'uppercase',
        padding: 10
    },
    heading1: {
        textAlign: 'center',
        fontWeight: 'bold', 
        color: '#333652',
        textTransform: 'uppercase',
        marginTop: -50,
        padding: 10
    },
    images: {
        width: 350,
        height: 250,
        marginBottom: 15,
        marginHorizontal: 10,
    },
    images1: {
        width: 350,
        height: 250,
        marginBottom: 15,
        marginHorizontal: 10,
    }
  });

export default Trips;