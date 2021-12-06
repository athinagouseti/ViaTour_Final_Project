import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import auth from '@react-native-firebase/auth'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()

    const navigation = useNavigation();

    useEffect(() => {
      if (error) {
        Alert.alert("Login Error", error, [{text: "OK", onPress: () => setError(undefined)}])
      }
    }, [error])

    const handleRegister = () => {
      navigation.navigate("Register")
    }

    const loginUser = () => {
          auth()
          .signInWithEmailAndPassword(email, password)
          .catch(
              error => {setError(error.code)}
          )
  }

    return (
        <View>
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
 
        <TouchableOpacity>
        <Text style={styles.button}>Forgot Password?</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.loginButton} onPress={loginUser}>
        <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.button}>Register Account</Text>
        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
      backgroundColor: "white",
      borderRadius: 20,
      borderColor: '#fad02c',
      borderWidth: 3,
      width: 210,
      height: 45,
      marginTop: 35,
      marginBottom: 20,
      marginLeft: 95,
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      marginRight: 10,
      flex: 1,
    },
   
    button: {
      marginBottom: 30,
      marginTop: 10,
      marginLeft: 145
    },
   
    loginButton: {
      width: 150,
      borderRadius: 20,
      borderColor: '#333652',
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      marginLeft: 125,
      backgroundColor: "#FAB52B"       
    },
    loginText:{
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: 'white',
      fontSize: 20
    }
    })

export default Login;