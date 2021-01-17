import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import React from "react";
import { Shop } from "../type/shop";
import Stars from "./Stars";

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width / 2;
const PADDING = 16;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 2;
const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    padding: PADDING,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * 0.7,
  },
  nameText: {
    fontSize: 16,
    color: "black",
    marginTop: 8,
    fontWeight: "bold",
  },
  placeText: {
    fontSize: 12,
    color: "#888",
    marginTop: 8,
  },
});

type Props = {
  shop: Shop;
};

export const ShopReviewItem: React.FC<Props> = ({ shop }) => {
  const { name, place, imageUrl, score, description } = shop;
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.placeText}>{place}</Text>
      <Stars score={score} />
    </View>
  );
};
