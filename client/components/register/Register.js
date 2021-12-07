import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import userService from "../../helpers/userService";
import { useNavigation } from "@react-navigation/native"

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState()

    const navigation = useNavigation()

    const passwordsMatch = () => password === confirmPassword;

    const registerUser = () => {
        if (passwordsMatch()) {
            userService.post({
                email,
                password,
                firstName,
                lastName
            })
            .then(() => navigation.navigate("Login"))
            .catch(error => setError(error))
        } else {
            setError("Passwords do not match"); 
        }
    }

    return (
        <View>
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
            
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="First Name"
                placeholderTextColor="gray"
                onChangeText={(firstName) => setFirstName(firstName)}
                />
            </View>
            
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Last Name"
                placeholderTextColor="gray"
                onChangeText={(lastName) => setLastName(lastName)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={(email) => setEmail(email)}
                />
            </View>
            
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Confirm Password"
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                />
            </View>

           {error && <Text style={styles.registerText}>{error}</Text>}

            <TouchableOpacity style={styles.registerButton} onPress={registerUser}>
            <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "white",
        borderRadius: 12,
        borderColor: '#fad02c',
        borderWidth: 3,
        width: 210,
        height: 45,
        marginTop: 35,
        marginBottom: 20,
        marginLeft: 96,
        alignItems: "center"
      },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10
    },
   
    registerButton: {
        width: 150,
        borderRadius: 20,
        borderColor: '#333652',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginLeft: 122,
        backgroundColor: "#FAB52B",
        shadowColor: '#333652',
        shadowOffset: { height: 0},
        shadowOpacity: 0.2,       
    },
    registerText:{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 20
      }
    })


export default Register;