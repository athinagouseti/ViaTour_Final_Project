import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";

const Trips_List = () => {
    
    return (
    
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}  showsVerticalScrollIndicator={false}>
        <TouchableOpacity >
        <View style={styles.trip}>
            <Text style={styles.text}>Moscow</Text><Text style={styles.text1}>09/03/2022</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.trip}>
            <Text style={styles.text}>Melbourne</Text><Text style={styles.text1}>10/05/2022</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.trip}>
            <Text style={styles.text}>Tel-Aviv</Text><Text style={styles.text1}>17/09/2022</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.trip}>
            <Text style={styles.text}>Lisbon</Text><Text style={styles.text1}>28/12/2022</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.trip}>
            <Text style={styles.text}>Moscow</Text><Text style={styles.text1}>09/03/2022</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.trip}>
            <Text style={styles.text}>Melbourne</Text><Text style={styles.text1}>10/05/2022</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.trip}>
            <Text style={styles.text}>Tel-Aviv</Text><Text style={styles.text1}>17/09/2022</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.trip}>
            <Text style={styles.text}>Lisbon</Text><Text style={styles.text1}>28/12/2022</Text>
        </View>
        </TouchableOpacity>
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
      },
    trip: {
        flexDirection: 'row',
        borderWidth: 5,
        backgroundColor: '#f3f3f2',
        borderColor: '#fad02c',
        overflow: 'hidden',
        opacity: 0.9,
        borderRadius: 20,
        padding: 30,
        marginTop: 20,
        margin: 30,
        marginHorizontal: 30,
        justifyContent: 'space-between'
    },
    text:{
        fontWeight: 'bold',
        color: '#333652',
        fontSize: 22,
    },
    text1: {
        fontWeight: 'normal',
        fontSize: 15,
        padding: 6
    }
  });


export default Trips_List;