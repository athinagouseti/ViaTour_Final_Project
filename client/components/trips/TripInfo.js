import React from "react";
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Text, ScrollView} from 'react-native';

const TripInfo = () => {

    return(
        <>
        <View style={styles.container}> 
            <Text style={styles.heading}>San Francisco</Text>
            <Text style={styles.date}>19/04/2022 - 27/04/2022</Text>
            <Text style={styles.text}>Day 1: blah blah</Text>
            <Text style={styles.text}>Day 2: blah blah</Text>
            <Text style={styles.text}>Day 3: blah blah </Text>
            <Text style={styles.text}>Day 4: blah blah</Text>
            <Text style={styles.text}>Day 1: blah blah</Text>
            <Text style={styles.text}>Day 2: blah blah</Text>
            <Text style={styles.text}>Day 3: blah blah </Text>
            <Text style={styles.text}>Day 4: blah blah</Text>
        </View>
        <ScrollView>
            <MapView style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker coordinate = {{latitude: 37.78825,longitude: -122.4324}}
              pinColor = {"red"} 
              title={"Trip"}
              description={"Tap to view trip"}/>
            </MapView>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        width: 350,
        height: 300,
        borderRadius: 25,
        borderColor: '#fad02c',
        borderWidth: 0.5,
        marginLeft: 20
    },
    container:{
        borderRadius: 20,
        borderColor: '#fad02c',
        borderWidth: 3,
        marginBottom: 25,
        marginHorizontal: 20,
        paddingBottom: 15,
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold', 
        color: '#333652',
        textTransform: 'uppercase',
        marginTop: 20,
        fontSize: 25
    },
    date: {
        textAlign: 'center',
        color: '#333652',
        textTransform: 'uppercase',
        marginTop: 10,
        paddingBottom: 15,
        fontSize: 15
    },
    text: {
        color: '#333652',
        textTransform: 'uppercase',
        marginTop: 10,
        marginLeft: 20,
        fontSize: 15,
        paddingBottom: 5    
    }
      
  });

export default TripInfo;