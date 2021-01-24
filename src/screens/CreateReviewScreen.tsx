import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useCallback, useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RootStackPramList } from "../type/navigation";
import { RouteProp } from "@react-navigation/native";
import { IconButton } from "../components/IconButton";
import { TextArea } from "../components/TextArea";
import { StarInput } from "../components/StarInput";
import { Button } from "../components/Button";
import { Review } from "../type/review";
import { UserContext } from "../context/userContext";
import firebase from "firebase";
import "firebase/firestore";
import { addReview } from "../lib/firebase";

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "CreateReview">;
  route: RouteProp<RootStackPramList, "CreateReview">;
};

const CreateReviewScreen: React.FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>("");
  const [score, setScore] = useState<number>(3);
  const { user } = useContext(UserContext);

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

  const onSubmit = async () => {
    const review: Review = {
      text,
      score,
      user: { id: user.id, name: user.name },
      shop: { id: shop.id, name: shop.id },
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: firebase.firestore.Timestamp.now(),
    };
    await addReview(shop.id, review);
  };

  return (
    <View>
      <StarInput
        score={score}
        starSize={32}
        onChangeScore={(value) => setScore(value)}
      />
      <TextArea
        value={text}
        onChangeText={setText}
        label={"レビュー"}
        placeholder={"レビューを書いてください"}
      ></TextArea>
      <View style={styles.photoContainer}>
        <IconButton name="camera" onPress={() => {}} color={"#ccc"} />
      </View>
      <Button text={"レビューを投稿する"} onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  photoContainer: {
    margin: 8,
  },
});

export default CreateReviewScreen;
