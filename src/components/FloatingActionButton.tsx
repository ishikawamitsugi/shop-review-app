import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  iconName: "plus";
  onPress: (event: GestureResponderEvent) => void;
};

const FloatingActionButton: React.FC<Props> = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Feather name={iconName} color={"red"} size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#900",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 16,
    bottom: 30,
  },
});

export default FloatingActionButton;
