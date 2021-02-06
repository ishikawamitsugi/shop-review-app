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
import { UserContext } from "./src/context/userContext";
import { initialUser, User } from "./src/type/user";
import { Review } from "./src/type/review";
import { ReviewContext } from "./src/context/reviewContext";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const [user, setUser] = useState<User>(initialUser);
  const [reviews, setReviews] = useState<Review[]>([]);

  return (
    <PaperProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <ReviewContext.Provider value={{ reviews, setReviews }}>
          <AppNavigator />
        </ReviewContext.Provider>
      </UserContext.Provider>
    </PaperProvider>
  );
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
