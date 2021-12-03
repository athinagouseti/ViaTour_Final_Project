import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Trips = () => {

    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.container}>
            <Text style={styles.heading}>Upcoming Trips</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
            pagingEnabled={true}
            style={styles.imageContainer}>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/Budapest.jpeg')} style={styles.images}/>
            </TouchableOpacity>
            <Text style={styles.imagetext}>Budapest - 21/10/2021 - 5 Days</Text>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/pest.jpeg')} style={styles.images}/>
            </TouchableOpacity>
            <Text style={styles.imagetext}>Budapest - 21/10/2021 - 5 Days</Text>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/Stockholm.jpeg')} style={styles.images}/>
            </TouchableOpacity>
            <Text style={styles.imagetext}>Stockholm - 16/08/2022 - 7 Days</Text>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/stock.jpg')} style={styles.images}/>
            </TouchableOpacity>
            <Text style={styles.imagetext}>Stockholm - 10/07/2022 - 1 Week</Text>
            </View>
            </ScrollView>
        </View>

        <View style={styles.container}>
            <Text style={styles.heading1}>Memories</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.imageContainer}>
            <View>
            <Image source={require('../trip_icons/Sweden.jpeg')} style={styles.images1}/>
            <Text style={styles.imagetext}>Sweden - 2019</Text>
            </View>
            <View>
            <Image source={require('../trip_icons/pest.jpeg')} style={styles.images1}/>
            <Text style={styles.imagetext}>Hungary - 2018</Text>
            </View>
            <View>
            <Image source={require('../trip_icons/Stockholm.jpeg')} style={styles.images1}/>
            <Text style={styles.imagetext}>Stockholm - 2019</Text>
            </View>
            <View>
            <Image source={require('../trip_icons/stock.jpg')} style={styles.images1}/>
            <Text style={styles.imagetext}>Stockholm - 2019</Text>
            </View>
            </ScrollView>
        </View>

        <View style={styles.container}>
            <Text style={styles.heading1}>Favourites</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.imageContainer}>
            <View>
            <Image source={require('../trip_icons/Sweden.jpeg')} style={styles.images1}/>
            <Text style={styles.imagetext}>Sweden</Text>
            </View>
            <View>
            <Image source={require('../trip_icons/pest.jpeg')} style={styles.images1}/>
            <Text style={styles.imagetext}>Hungary</Text>
            </View>
            <View>
            <Image source={require('../trip_icons/Stockholm.jpeg')} style={styles.images1}/>
            <Text style={styles.imagetext}>Stockholm</Text>
            </View>
            <View>
            <Image source={require('../trip_icons/stock.jpg')} style={styles.images1}/>
            <Text style={styles.imagetext}>Stockholm</Text>
            </View>
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
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold', 
        color: '#333652',
        textTransform: 'uppercase',
        padding: 10,
        marginTop: 10
    },
    heading1: {
        textAlign: 'center',
        fontWeight: 'bold', 
        color: '#333652',
        textTransform: 'uppercase',
        padding: 20
    },
    images: {
        width: 350,
        height: 225,
        marginBottom: 15,
        marginHorizontal: 10,
    },
    images1: {
        width: 350,
        height: 225,
        marginBottom: 15,
        marginHorizontal: 10,
    },
    imagetext:{
        alignItems:'flex-start',
        justifyContent:'center',
        marginLeft: 10,
        color: '#333652',
        fontSize: 20
    }
  });

export default Trips;