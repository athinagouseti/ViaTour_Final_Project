import React from "react";
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import DraggableFlatList, {
    ScaleDecorator,
  } from "react-native-draggable-flatlist";

const Wishlist = () => {
    
    return (
        <ScrollView style={styles.container}>
        <View>
            <Text style={styles.text}>Denver</Text>
            <Text style={styles.text}>Tokyo</Text>
            <Text style={styles.text}>Paris</Text>
            <Text style={styles.text}>Rome</Text>
            <Text style={styles.text}>Berlin</Text>
            <Text style={styles.text}>London</Text>
            <Text style={styles.text}>Moscow</Text>
            <Text style={styles.text}>Glasgow</Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'white',
       flex: 1
      },
    text: {
        borderWidth: 2,
        borderColor: '#fad02c',
        borderRadius: 15,
        padding: 20,
        marginTop: 15,
        margin: 25,
        fontWeight: 'bold',
        color: '#333652',
        fontSize: 25
    }
  });


export default Wishlist;