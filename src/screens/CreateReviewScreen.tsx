import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useCallback, useState, useContext } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
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
import { createReviewRef, uploadImage } from "../lib/firebase";
import { pickImage } from "../lib/imagePicker";
import { getExtention } from "../util/file";
import { Loading } from "../components/Loading";
import { ReviewContext } from "../context/reviewContext";

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "CreateReview">;
  route: RouteProp<RootStackPramList, "CreateReview">;
};

const CreateReviewScreen: React.FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>("");
  const [score, setScore] = useState<number>(3);
  const [imageUri, setImageUri] = useState<string>("");
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);
  const { reviews, setReviews } = useContext(ReviewContext);

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

  const onPickImage = async () => {
    const uri = await pickImage();
    setImageUri(uri);
  };

  const onSubmit = async () => {
    if (!text || !imageUri) {
      Alert.alert("テキストと画像の両方を入力してください");
      return;
    }
    // storageのパスを決定
    const extention = getExtention(imageUri);
    setLoading(true);
    // 参照先を取得
    const reviewDocRef = await createReviewRef(shop.id);
    let downloadUri = undefined;
    if (!!reviewDocRef) {
      const storagePath = `reviewDoc/${reviewDocRef.id}.${extention}`;
      downloadUri = await uploadImage(imageUri, storagePath);
      // reviewオブジェクトの生成
      const uploadReview: Review = {
        user: {
          id: user.id,
          name: user.name,
        },
        shop: {
          id: shop.id,
          name: shop.name,
        },
        text,
        score,
        imageUri: downloadUri ?? "",
        createdAt: firebase.firestore.Timestamp.now(),
        updatedAt: firebase.firestore.Timestamp.now(),
      };
      // fireStoreにレビューを送信
      await reviewDocRef.set(uploadReview);
      setReviews([uploadReview, ...reviews]);
    }
    setLoading(false);
    navigation.goBack();
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
        <IconButton name="camera" onPress={onPickImage} color={"#ccc"} />
      </View>
      {!!imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button text={"レビューを投稿する"} onPress={onSubmit} />
      <Loading visible={loading} />
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
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
});

export default CreateReviewScreen;
