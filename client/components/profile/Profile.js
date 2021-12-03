import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Trips from "../trips/Trips";
import ReactMap from "../map/ReactMap";

const Profile = () => {

    return(
        <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity>
        <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.login}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text style={styles.text}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.text}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text style={styles.text}>Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text style={styles.text}>Wishlist</Text>
        </TouchableOpacity>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1
      },
    text: {
        borderWidth: 4,
        borderColor: '#fad02c',
        borderRadius: 20,
        backgroundColor: '#fad02c',
        padding: 25,
        marginTop: 10,
        margin: 70,
        fontWeight: 'bold',
        color: '#333652',
        fontSize: 30,
        textAlign: 'center'
    },
    login:{
        flex: 1,
        width: 70,
        color: '#333652',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
  });

export default Profile;