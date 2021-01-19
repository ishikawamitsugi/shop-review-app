import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RootStackPramList } from "../type/navigation";
import { RouteProp } from "@react-navigation/native";

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "CreateReview">;
  route: RouteProp<RootStackPramList, "CreateReview">;
};

const CreateReviewScreen: React.FC<Props> = ({ navigation, route }) => {
  console.log("CreateReviewScreen");
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
