import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  LogBox,
  FlatList,
  SafeAreaView,
} from "react-native";
import { getShops } from "./src/lib/firebase";
import { Shop } from "./src/type/shop";
import AppNavigator from "./src/navigations/AppNavigator";
import "firebase/firestore";
import { ShopReviewItem } from "./src/components/ShopReviewItem";
LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
  },
});
