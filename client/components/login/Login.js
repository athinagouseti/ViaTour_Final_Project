import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const Login = ({navigation}) => {
    return(
        <View style={styles.loginContainer}>
            <Button
                title="Log In"
                onPress={() => {
                    navigation.navigate("Landing Page")
                }}
            />
            <Button
                title="Create Account"
                onPress={() => {
                    navigation.navigate("Create Account")
                }}
            />
            <Button
                title="Forgot Password?"
                onPress={() => {
                    navigation.navigate("Reset Password")
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        width: 150,
        height: 150,
        padding: 60,
      }
})

export default Login;