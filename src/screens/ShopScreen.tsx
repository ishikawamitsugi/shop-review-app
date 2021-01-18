import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackPramList } from "../type/navigation";
import { RouteProp } from "@react-navigation/native";
import { ShopDetail } from "../components/ShopDetail";

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "Shop">;
  route: RouteProp<RootStackPramList, "Shop">;
};

const ShopScreen: React.FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  console.log(shop);
  return <ShopDetail shop={shop} />;
};

export default ShopScreen;
