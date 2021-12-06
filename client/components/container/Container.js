import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Trips from "../trips/Trips";
import Homepage from "../homepage/Homepage";
import ReactMap from "../map/ReactMap";
import { Image , StyleSheet } from 'react-native';
import WishlistTab from "../wishlistTab/WishlistTab";
import User from "../user/User";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Container = () => {

    return (

        // To name top of tab use { title: } in options
        <NavigationContainer>
            <Tab.Navigator
             screenOptions={({ route }) => ({
                tabBarLabelPosition: "below-icon",
                tabBarStyle: {
                    position: 'absolute',
                },
                tabBarActiveTintColor: '#333652',
                tabBarInactiveTintColor: 'white'
            })}> 
        <Tab.Screen name="Home" component={Homepage}  
                options= {{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/home_icon.png')}
                    style={styles.homeIcon} name="home-icon"/> ), 
                }}/>
        <Tab.Screen name="WishlistTab" component={WishlistTab} 
                options= {{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/wishlist_icon.png')}
                    style={styles.wishlistIcon} name="wishlist-icon" /> ),
                    headerShown: false,
                    title: "Wishlist",
                }}/>
        <Tab.Screen name="Map" component={ReactMap} 
                options={{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/Map_Icon.png')}
                    style={styles.mapIcon} name="map-icon"/> ),
                    tabBarLabel: () => {return null}, 
                }} />
        <Tab.Screen name="Trips" component={Trips} 
                options={{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/trips_icon.png')}
                    style={styles.tripsIcon} name="trips-icon" /> ),
                    title: "My Trips",
                  
                }}/>
        <Tab.Screen name="User" component={User} 
                options={{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/profile_icon.png')}
                    style={styles.profileIcon} name="profile-icon" /> ),
                    headerShown: false ,
                    
                }}/>
            
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    homeIcon: {
        width: 70,
        height: 70,
        marginTop: 20,
        marginBottom: 15,
        tintColor: '#333652'
      },
    wishlistIcon: {
        width: 60,
        height: 60,
        marginTop: 22,
        marginBottom: 15,
        tintColor: '#333652'
      },
    mapIcon: {
        width: 125,
        height: 100,
        marginBottom: 15
      },
    tripsIcon: {
        width: 70,
        height: 70,
        marginTop: 20,
        marginBottom: 15,
        tintColor: '#333652'
      },
    profileIcon: {
        width: 70,
        height: 70,
        marginTop: 20,
        marginBottom: 15,
        tintColor: '#333652'
      },
  });

export default Container;