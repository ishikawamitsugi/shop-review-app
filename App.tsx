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

import "firebase/firestore";
import { ShopReviewItem } from "./src/components/ShopReviewItem";
LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItem();
  }, []);

  const getFirebaseItem = async () => {
    const shops = await getShops();
    setShops(shops);
  };
  const shopItems = shops.map((shop, index) => {
    return <ShopReviewItem shop={shop} key={index.toString()} />;
  });
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
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
