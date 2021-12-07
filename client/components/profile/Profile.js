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
        overflow: 'hidden',
        borderColor: '#fad02c',
        backgroundColor: '#fad02c',
        marginLeft: 50,
        marginRight: 45,
        padding: 25,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333652',
        fontSize: 30,
        textAlign: 'center'
    },
    login:{
        width: 125,
        color: 'white',
        fontSize: 25,
        marginLeft: 135,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#333652',
        overflow: 'hidden',
        borderColor: '#fad02c',
        borderWidth: 3,
        borderRadius: 10
    }
  });

export default Profile;