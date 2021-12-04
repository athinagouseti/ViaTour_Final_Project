import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";

const Profile = () => {

    const navigation = useNavigation();
    const user = auth().currentUser;

    const logoutUser = () => {
        auth()
        .signOut()
    }

    return (
        <View style={styles.container}>
        <ScrollView>
           <Text style={styles.text}>{user.email}</Text>
           <TouchableOpacity onPress={logoutUser}>
                <Text style={styles.login} >Log Out</Text>
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