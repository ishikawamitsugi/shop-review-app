import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
type Props = {};

const AuthScreen: React.FC<Props> = () => {
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
