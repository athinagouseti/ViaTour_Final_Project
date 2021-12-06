import React, { useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Profile from '../profile/Profile';
import Login from '../login/Login';
import Register from '../register/Register';
import auth from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator();

const User = () => {

    const [activeUser, setActiveUser] = useState();

    auth().onAuthStateChanged((user) => {
        setActiveUser(user)
    })

    return (
        <Stack.Navigator>
            {activeUser ? 
            (<Stack.Screen name="Profile" component={Profile} />) :
            (<>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </>)}
            
        </Stack.Navigator>
    )
}

export default User;