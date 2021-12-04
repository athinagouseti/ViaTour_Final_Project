import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";

const Trips_List = () => {
    
    return (
    
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} 
        showsVerticalScrollIndicator={false} pagingEnabled={true}>

        <View style={styles.trip}>
            <Text style={styles.text}>Moscow</Text><Text style={styles.text1}>09/03/2022</Text>
        </View>
        <TouchableOpacity>
            <Image style={styles.info} source={require('../navigation_icons/trip_info.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.remove} source={require('../navigation_icons/remove_trip.png')}/>
        </TouchableOpacity>

        <View style={styles.trip}>
            <Text style={styles.text}>Melbourne</Text><Text style={styles.text1}>10/05/2022</Text>
        </View>
        <TouchableOpacity>
            <Image style={styles.info} source={require('../navigation_icons/trip_info.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.remove} source={require('../navigation_icons/remove_trip.png')}/>
        </TouchableOpacity>

        <View style={styles.trip}>
            <Text style={styles.text}>Tel-Aviv</Text><Text style={styles.text1}>17/09/2022</Text>
        </View>
        <TouchableOpacity>
            <Image style={styles.info} source={require('../navigation_icons/trip_info.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.remove} source={require('../navigation_icons/remove_trip.png')}/>
        </TouchableOpacity>

        <View style={styles.trip}>
            <Text style={styles.text}>Lisbon</Text><Text style={styles.text1}>28/12/2022</Text>
        </View>
        <TouchableOpacity>
            <Image style={styles.info} source={require('../navigation_icons/trip_info.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.remove} source={require('../navigation_icons/remove_trip.png')}/>
        </TouchableOpacity>

        <View style={styles.trip}>
            <Text style={styles.text}>Valencia</Text><Text style={styles.text1}>16/01/2023</Text>
        </View>
        <TouchableOpacity>
            <Image style={styles.info} source={require('../navigation_icons/trip_info.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.remove} source={require('../navigation_icons/remove_trip.png')}/>
        </TouchableOpacity>

        <View style={styles.trip}>
            <Text style={styles.text}>Paris</Text><Text style={styles.text1}>21/04/2023</Text>
        </View>
        <TouchableOpacity>
            <Image style={styles.info} source={require('../navigation_icons/trip_info.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.remove} source={require('../navigation_icons/remove_trip.png')}/>
        </TouchableOpacity>

        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       shadowColor: '#333652',
       shadowOffset: { height: 2},
       shadowOpacity: 0.5
      },
    trip: {
        flexDirection: 'row',
        borderWidth: 5,
        backgroundColor: '#fad02c',
        // backgroundColor: '#f3f3f2',
        borderColor: '#fad02c',
        overflow: 'hidden',
        borderRadius: 20,
        padding: 30,
        margin: 15,
        justifyContent: 'space-evenly',
    },
    text:{
        fontWeight: 'bold',
        color: '#333652',
        fontSize: 22,
    },
    text1: {
        fontWeight: 'normal',
        fontSize: 15,
        padding: 5
    },
    remove:{
        width: 60,
        height: 60,
        marginTop: -95,
        marginLeft: 310,
        tintColor: 'white'
    },
    info:{
        width: 50,
        height: 50,
        marginTop: -90,
        marginLeft: 20,
        tintColor: 'white'
    }
  });


export default Trips_List;