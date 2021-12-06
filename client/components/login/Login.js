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
 
        <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.loginButton} onPress={loginUser}>
        <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister}>
        <Text>Register?</Text>
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
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginButton: {
      width: "60%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FAB52B",       
    }
    })

export default Login;