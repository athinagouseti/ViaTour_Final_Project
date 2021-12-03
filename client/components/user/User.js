import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Profile from '../profile/Profile';
import Login from '../login/Login';
import Register from '../register/Register';

const Stack = createNativeStackNavigator();

const User = () => {


    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default User;