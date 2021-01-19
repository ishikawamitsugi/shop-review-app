import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackPramList } from "../type/navigation";
import { RouteProp } from "@react-navigation/native";
import { ShopDetail } from "../components/ShopDetail";
import FloatingActionButton from "../components/FloatingActionButton";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "Shop">;
  route: RouteProp<RootStackPramList, "Shop">;
};

const ShopScreen: React.FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: shop.name });
  }, [shop]);
  return (
    <View style={styles.container}>
      <ShopDetail shop={shop} />
      <FloatingActionButton
        iconName={"plus"}
        onPress={() => navigation.navigate("CreateReview", { shop })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShopScreen;
