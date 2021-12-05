import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import New_Trip from '../trips/New_Trip';
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";
import Trips_List from "../trips/Trips_List";
import News from "./News";


const Homepage = () => {

    return (
        <>
        <View style={styles.container}>
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[2]}>
            <Text style={styles.heading}>Latest Travel News</Text>
                <News/>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.heading}>My Upcoming Trips</Text>
            <TouchableOpacity>
                <Image style={styles.add} source={require('../navigation_icons/add_trip.png')}/>
            </TouchableOpacity>
            </View>
            <View>
                <Trips_List/>
                {/* <New_Trip/> */}
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
    heading: {
        fontWeight: 'bold', 
        color: '#333652',
        textTransform: 'uppercase',
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20
    },
    add:{
        width: 80,
        height: 50,
        marginTop: -48,
        marginLeft: 300
    }
  });

export default Homepage;