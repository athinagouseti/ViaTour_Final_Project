import React from "react";
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions } from 'react-native';

const ReactMap = () => {

    return(
        <View>
            <MapView style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker coordinate = {{latitude: 37.78825,longitude: -122.4324}}
              pinColor = {"purple"} 
              title={"Trip"}
              description={"Tap to view trip"}/>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default ReactMap;