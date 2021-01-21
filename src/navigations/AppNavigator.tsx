import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./HomeStackNavigator";
import MainTabNavigator from "./MainTabNavigator";
import AuthScreen from "../screens/AuthScreen";

const AppNavigator: React.FC = () => {
  const user = null;

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
