import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {};

const UserScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello UserScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  text: {
    color: "black",
  },
});

export default UserScreen;
