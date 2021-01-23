import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RootStackPramList } from "../type/navigation";
import { RouteProp } from "@react-navigation/native";
import IconButton from "../components/IconButton";

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "CreateReview">;
  route: RouteProp<RootStackPramList, "CreateReview">;
};

const CreateReviewScreen: React.FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton
          name="x"
          onPress={() => navigation.goBack()}
          color={"black"}
        />
      ),
    });
  }, [shop]);
  return (
    <View>
      <Text>Hello CreateReviewScreen !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateReviewScreen;
