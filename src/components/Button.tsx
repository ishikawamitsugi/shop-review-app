import React from "react";
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";

type Props = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
};

export const Button: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#900",
    margin: 25,
  },
  text: {
    fontSize: 18,
    padding: 8,
    color: "#fff",
    textAlign: "center",
  },
});
