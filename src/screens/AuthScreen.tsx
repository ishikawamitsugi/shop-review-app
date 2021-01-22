import React, { useEffect, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import { signIn } from "../lib/firebase";
import { UserContext } from "../context/userContext";

type Props = {};

const AuthScreen: React.FC<Props> = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await signIn();
      setUser(user);
    };
    fetchUser();
  }, [setUser]);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={"large"} color={"#900"} />
      <Text style={styles.text}>ログイン中...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    color: "gray",
    marginTop: 8,
  },
});

export default AuthScreen;
