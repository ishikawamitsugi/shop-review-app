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

type Props = {
  navigation: StackNavigationProp<RootStackPramList, "User">;
  route: RouteProp<RootStackPramList, "User">;
};

const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState<string>(user.name);

  const onSubmit = async () => {
    const updatedAt = firebase.firestore.Timestamp.now();
    await updateUser({ name, updatedAt, createdAt: user.createdAt }, user.id);
    const updateUserInfo: User = {
      id: user.id,
      createdAt: user.createdAt,
      updatedAt,
      name,
    };
    console.log("updateUserInfo", updateUserInfo);
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
      <Button text={"登録"} onPress={onSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default UserScreen;
