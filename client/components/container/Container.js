import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Trips from "../trips/Trips";
import Homepage from "../homepage/Homepage";
import Wishlist from "../wishlist/Wishlist";
import Profile from "../profile/Profile";
import ReactMap from "../map/ReactMap";
import SvgMapIcon from "../navigation_icons/Map_Icon.js";
import { Image , StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Container = () => {

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Homepage" component={Homepage} />
                <Tab.Screen name="Wishlist" component={Wishlist} />
                <Tab.Screen name=" " component={ReactMap} options={{tabBarIcon: () => (<Image  source={require('../navigation_icons/map_icon_1.png')} style={styles.mapIcon} name="map-icon" /> )}} />
                <Tab.Screen name="Trips" component={Trips} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    mapIcon: {
      width: 100,
      height: 100,
      padding: 70,
    },
  });

// options={{tabBarIcon: () => (<SvgMapIcon  name="map-icon" /> )}}
export default Container;