import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import { RootStackPramList } from "../type/navigation";

const Stack = createStackNavigator<RootStackPramList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
