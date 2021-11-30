import React from "react";
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions, TextInput } from 'react-native';

const ReactMap = () => {

    return(
        <View>
            <MapView loadingEnabled={true} style={styles.map}
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
            <View style={{ position: 'absolute', top: 10, width: '100%' }}>
              <TextInput
                style={{
                  borderRadius: 100,
                  margin: 10,
                  color: '#343652',
                  borderColor: '#343652',
                  backgroundColor: '#FFF',
                  borderWidth: 5,
                  height: 45,
                  paddingHorizontal: 10,
                  fontSize: 18,
                }}
                placeholder={'Search'}
                placeholderTextColor={'#343652'}
              />
            </View>
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