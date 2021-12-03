import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Trips from "../trips/Trips";
import Homepage from "../homepage/Homepage";
import Wishlist from "../wishlist/Wishlist";
import User from "../user/User";
import ReactMap from "../map/ReactMap";
import { Image , StyleSheet} from 'react-native';
import WishlistTab from "../wishlistTab/WishlistTab";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Container = () => {

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Homepage" component={Homepage} options=
                {{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/home_icon.png')} style={styles.homeIcon} name="home-icon" /> ), 
                    tabBarLabel: () => {return null} 
                }}/>
                <Tab.Screen name="WishlistTab" component={WishlistTab} options=
                {{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/wishlist_icon.png')} style={styles.wishlistIcon} name="wishlist-icon" /> ),
                    tabBarLabel: () => {return null},
                    headerShown: false  
                }}/>
                <Tab.Screen name="Map" component={ReactMap} options=
                {{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/map_icon_1.png')} style={styles.mapIcon} name="map-icon" /> ),
                    tabBarLabel: () => {return null} 
                }} />
                <Tab.Screen name="Trips" component={Trips} options=
                {{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/trips_icon.png')} style={styles.tripsIcon} name="trips-icon" /> ),
                    tabBarLabel: () => {return null} 
                }}/>
                <Tab.Screen name="User" component={User} options=
                {{
                    tabBarIcon: () => (<Image source={require('../navigation_icons/profile_icon.png')} style={styles.profileIcon} name="profile-icon" /> ),
                    tabBarLabel: () => {return null},
                    headerShown: false 
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    mapIcon: {
      width: 150,
      height: 150,
      padding: 60,
    },
    homeIcon: {
        width: 100,
        height: 100,
        marginTop: 15
      },
    wishlistIcon: {
        width: 100,
        height: 100,
        marginTop: 20
      },
    tripsIcon: {
        width: 100,
        height: 100,
        marginTop: 15
      },
    profileIcon: {
        width: 100,
        height: 100,
        marginTop: 15
      },
  });

// options={{tabBarIcon: () => (<MapIcon  name="map-icon" /> )}}
export default Container;