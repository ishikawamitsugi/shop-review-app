import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  LogBox,
  FlatList,
  SafeAreaView,
} from "react-native";
import { getShops } from "../lib/firebase";
import { Shop } from "../type/shop";
import "firebase/firestore";
import { ShopReviewItem } from "../components/ShopReviewItem";
LogBox.ignoreLogs(["Setting a timer"]);
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackPramList } from "../type/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "Home">;
};

const HomeScreen: React.FC<any> = ({ navigation }) => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItem();
  }, []);

  const getFirebaseItem = async () => {
    const shops = await getShops();
    setShops(shops);
  };

  const onPressShop = (item: Shop) => {
    navigation.navigate("Shop", {
      shop: item,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} onPress={() => onPressShop(item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
  },
});

export default HomeScreen;
