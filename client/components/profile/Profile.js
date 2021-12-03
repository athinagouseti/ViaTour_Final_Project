import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";

const Profile = () => {

    const navigation = useNavigation();
    const user = auth().currentUser;

    const logoutUser = () => {
        auth()
        .signOut()
    }

    return(
        <View>

           <Text>{user.email}</Text>
           <TouchableOpacity style={styles.button} onPress={logoutUser}>
            <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
      width: "60%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FAB52B",       
    }
    })


export default Profile;