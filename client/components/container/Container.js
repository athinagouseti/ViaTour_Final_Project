import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Trips from "../trips/Trips";
import Homepage from "../homepage/Homepage";
import Wishlist from "../wishlist/Wishlist";
import Profile from "../profile/Profile";
import ReactMap from "../map/ReactMap";

import { Image , StyleSheet, TouchableOpacity} from 'react-native';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Container = () => {

    return(
        <NavigationContainer>
            <Tab.Navigator

             screenOptions={({ route }) => ({
                tabBarLabelPosition: "below-icon",
                tabBarStyle: {
                    position: 'absolute',
                    opacity: 0.85,
                    backgroundColor: '#333652'
                },
                tabBarActiveTintColor: '#fad02C',
                tabBarInactiveTintColor: 'white'
            })}>
            
            
                <Tab.Screen name="Home" component={Homepage}  
                options= {{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/home_icon.png')}
                    style={styles.homeIcon} name="home-icon"/> ), 
                }}/>
                <Tab.Screen name="Wishlist" component={Wishlist} 
                options= {{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/Wishlist_Icon.png')}
                    style={styles.wishlistIcon} name="wishlist-icon" /> ),
                }}/>
                <Tab.Screen name='Map' component={ReactMap} 
                options={{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/map_icon_1.png')}
                    style={styles.mapIcon} name="map-icon"/> ),
                }} />
               
                <Tab.Screen name="Trips" component={Trips} 
                options={{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/trips_icon.png')}
                    style={styles.tripsIcon} name="trips-icon" /> ),
                  
                }}/>
                <Tab.Screen name="Profile" component={Profile} 
                options={{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/profile_icon.png')}
                    style={styles.profileIcon} name="profile-icon" /> ),
                    
                }}/>
            
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    homeIcon: {
        width: 70,
        height: 70,
        marginTop: 15,
        marginBottom: 15,
        tintColor: '#fad02C'
      },
    wishlistIcon: {
        width: 60,
        height: 60,
        marginTop: 20,
        marginBottom: 15,
        tintColor: '#fad02C'
      },
    mapIcon: {
        width: 150,
        height: 100,
        padding: 45,
        marginBottom: 25
      },
    tripsIcon: {
        width: 70,
        height: 70,
        marginTop: 15,
        marginBottom: 15,
        tintColor: '#fad02C'
      },
    profileIcon: {
        width: 70,
        height: 70,
        marginTop: 15,
        marginBottom: 15,
        tintColor: '#fad02C'
      },
  });

export default Container;