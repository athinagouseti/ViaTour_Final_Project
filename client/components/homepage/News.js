import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import New_Trip from '../trips/New_Trip';
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";
import Trips_List from "../trips/Trips_List";

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
        borderRadius: 10
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