import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import { RootStackPramList } from "../type/navigation";
import CreateReviewScreen from "../screens/CreateReviewScreen";

const Stack = createStackNavigator<RootStackPramList>();
const RootStack = createStackNavigator<RootStackPramList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: "black" }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <RootStack.Navigator mode={"modal"}>
      <RootStack.Screen
        name="Main"
        component={MainStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name="CreateReview" component={CreateReviewScreen} />
    </RootStack.Navigator>
  );
};
export default HomeStackNavigator;
