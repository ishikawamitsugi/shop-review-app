import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackPramList } from "../type/navigation";
import { RouteProp } from "@react-navigation/native";
import { ShopDetail } from "../components/ShopDetail";
import FloatingActionButton from "../components/FloatingActionButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReviewItem } from "../components/ReviewItem";
import { getReviews } from "../lib/firebase";
import { Review } from "../type/review";

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "Shop">;
  route: RouteProp<RootStackPramList, "Shop">;
};

const ShopScreen: React.FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  const [review, setReview] = useState<Review[]>([]);

  useEffect(() => {
    navigation.setOptions({ title: shop.name });
    const fetchReview = async () => {
      const ret = await getReviews(shop.id);
      setReview(ret);
    };
    fetchReview();
  }, [shop]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<ShopDetail shop={shop} />}
        data={review}
        renderItem={({ item }: { item: Review }) => (
          <ReviewItem review={item} />
        )}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
      <FloatingActionButton
        iconName={"plus"}
        onPress={() => navigation.navigate("CreateReview", { shop })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#fff",
  },
});

export default ShopScreen;
