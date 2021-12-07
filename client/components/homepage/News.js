import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import NewTrip from '../trips/NewTrip';
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";
import TripsList from "../trips/TripsList";

const News = () => {

    return (
        <>
        <View style={styles.container}>
        <ScrollView nestedScrollEnabled={true}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
            pagingEnabled={false}
            style={styles.imageContainer}>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/freedom.jpeg')} style={styles.images}/>
            <Text style={styles.imagetext}>COVID-19 Over!</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/plane.jpeg')} style={styles.images}/>
            <Text style={styles.imagetext}>Free Flights for All?!</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/lake.jpeg')} style={styles.images}/>
            <Text style={styles.imagetext}>Win a Free Trip Here!</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
            <Image source={require('../trip_icons/map.jpeg')} style={styles.images}/>
            <Text style={styles.imagetext}>Top 100 Places To Go!</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
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
        marginHorizontal: 5,
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
    images: {
        width: 210,
        height: 180,
        marginBottom: 15,
        marginTop: 5,
        marginHorizontal: 15,
        borderRadius: 5
    },
    imagetext:{
        justifyContent:'center',
        marginLeft: 15,
        padding: 5,
        color: '#333652',
        fontSize: 20
    }
  });

export default News;
