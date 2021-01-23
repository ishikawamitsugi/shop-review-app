import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useCallback, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RootStackPramList } from "../type/navigation";
import { RouteProp } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import { TextArea } from "../components/TextArea";

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "CreateReview">;
  route: RouteProp<RootStackPramList, "CreateReview">;
};

const CreateReviewScreen: React.FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>("");
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
      <TextArea
        value={text}
        onChangeText={setText}
        label={"レビュー"}
        placeholder={"レビューを書いてください"}
      ></TextArea>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default CreateReviewScreen;
