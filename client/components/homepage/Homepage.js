import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import New_Trip from '../trips/New_Trip';
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";
import Trips_List from "../trips/Trips_List";


const Homepage = () => {

    return (
        <>
        <View style={styles.container}>
        <ScrollView nestedScrollEnabled={true}>
            <Text style={styles.heading}>Latest Travel News</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
            pagingEnabled={true}
            style={styles.imageContainer}>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/Budapest.jpeg')} style={styles.images}/>
            <Text style={styles.imagetext}>Article Name</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/pest.jpeg')} style={styles.images}/>
            <Text style={styles.imagetext}>Article Name</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/Stockholm.jpeg')} style={styles.images}/>
            <Text style={styles.imagetext}>Article Name</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/stock.jpg')} style={styles.images}/>
            <Text style={styles.imagetext}>Article Name</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>

            <View>
            <Text style={styles.heading}>My Upcoming Trips</Text>
            <Trips_List/>
            </View>
            </ScrollView>
        </View>
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
        fontWeight: 'bold', 
        color: '#333652',
        textTransform: 'uppercase',
        padding: 10,
        marginTop: 15,
        marginLeft: 10
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

export default Homepage;