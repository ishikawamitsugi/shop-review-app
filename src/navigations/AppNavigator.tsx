import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./HomeStackNavigator";
import MainTabNavigator from "./MainTabNavigator";

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
