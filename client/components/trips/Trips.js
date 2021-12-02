import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import New_Trip from "./New_Trip";

const Trips = () => {

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.heading}>Upcoming Trips</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.heading}>Memories</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold', 
        textTransform: 'uppercase',
        padding: 25
    }
  });

export default Trips;