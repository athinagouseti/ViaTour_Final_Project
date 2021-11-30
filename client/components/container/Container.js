import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Trips from "../trips/Trips";
import Homepage from "../homepage/Homepage";
import Wishlist from "../wishlist/Wishlist";
import Profile from "../profile/Profile";
import ReactMap from "../map/ReactMap";
import SvgMapIcon from "../navigation_icons/MapIcon.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Container = () => {

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Homepage" component={Homepage} />
                <Tab.Screen name="Wishlist" component={Wishlist} />
                <Tab.Screen name="Map" component={ReactMap} options={{tabBarIcon: () => (<SvgMapIcon  name="map-icon" /> )}} />
                <Tab.Screen name="Trips" component={Trips} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Container;