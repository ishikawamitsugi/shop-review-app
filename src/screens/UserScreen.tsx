import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useContext, useEffect } from "react";
import { Platform } from "react-native";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Form } from "../components/Form";
import { RootStackPramList } from "../type/navigation";
import { Button } from "../components/Button";
import { UserContext } from "../context/userContext";
import { User } from "../type/user";
import { updateUser } from "../lib/firebase";
import firebase from "firebase";
import "firebase/firestore";
import { Loading } from "../components/Loading";
import { Button as PaperButton } from "react-native-paper";

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "User">;
  route: RouteProp<RootStackPramList, "User">;
};

const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState<string>(user.name);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    const updatedAt = firebase.firestore.Timestamp.now();
    await updateUser({ name, updatedAt, createdAt: user.createdAt }, user.id);
    setLoading(false);
    const updateUserInfo: User = {
      id: user.id,
      createdAt: user.createdAt,
      updatedAt,
      name,
    };
    setUser(updateUserInfo);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Form
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
        label="名前"
      />
      <View style={styles.papperButton}>
        <PaperButton icon="camera" mode="contained" onPress={onSubmit}>
          登録
        </PaperButton>
      </View>

      <Loading visible={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  papperButton: {
    display: "flex",
    width: "80%",
    height: 50,
    marginLeft: 32,
    justifyContent: "center",
  },
  papperButtonText: {
    textAlign: "center",
  },
});
export default UserScreen;
