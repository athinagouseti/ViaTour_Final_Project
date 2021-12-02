import React from "react";
import { View, Text, ScrollView} from 'react-native';

const Profile = () => {

    return(
        <ScrollView>
        <View>
            <Text>My Profile</Text>
            <Text>Map</Text>
            <Text>Trips</Text>
            <Text>Favourites</Text>
        </View>
        </ScrollView>
    )
}

export default Profile;