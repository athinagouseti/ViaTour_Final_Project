import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wishlist from "../wishlist/Wishlist";
import WishlistDestination from "../wishlistDestination/WishlistDestination";

const Stack = createNativeStackNavigator();

const WishlistTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="WishlistDestination" component={WishlistDestination} />
    </Stack.Navigator>
  );
};

export default WishlistTab;
