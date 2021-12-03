import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import auth from '@react-native-firebase/auth'

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState()

    const passwordsMatch = () => password === confirmPassword;

    const registerUser = () => {
        if (passwordsMatch()) {
            // Alert.alert('User would have registered')
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('User would have registered')
            })
            .catch(
                error => {setError(error.code)}
            )
        } else {
            setError("Passwords do not match"); 
        }
    }

    return (
        <View>
            <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
            />
            </View>

            <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            />
            </View>

            <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
            />
            </View>

           {error && <Text style={styles.loginText}>{error}</Text>}

            <TouchableOpacity style={styles.registerButton} onPress={registerUser}>
            <Text>REGISTER</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    inputView: {
      backgroundColor: "#FAD02B",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    registerButton: {
      width: "60%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FAB52B",       
    }
    })


export default Register;