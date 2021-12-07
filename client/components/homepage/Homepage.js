import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import NewTrip from '../trips/NewTrip';
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";
import TripsList from "../trips/TripsList";
import News from "./News";
import TripInfo from "../trips/TripInfo";




const Homepage = () => {

    return (
        <View style={styles.container}>
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}
         contentContainerStyle={{ paddingBottom: 85 }}>
            <Text style={styles.heading}>Latest Travel News</Text>
                <News/>
            <View style={{flexDirection:'row'}}>
                {/* <Text style={styles.heading}>My Upcoming Trips</Text> */}
            <TouchableOpacity>
                {/* <Image style={styles.add} source={require('../navigation_icons/add_trip.png')}/> */}
            </TouchableOpacity>
            </View>
            <View>
                {/* <TripsList/> */}
                <NewTrip/>
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    heading: {
        fontWeight: 'bold', 
        color: '#333652',
        textTransform: 'uppercase',
        padding: 10,
        // marginTop: 10,
        marginLeft: 10,
        fontSize: 20
    },
    add:{
        width: 80,
        height: 50,
        marginTop: -40,
        marginLeft: 300
    }
  });

export default Homepage;