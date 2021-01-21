import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Props = {
  name: "x";
  color: string;
  onPress: (event: GestureResponderEvent) => void;
};

const IconButton: React.FC<Props> = ({ name, color, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Feather name={name} color={color} size={25} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default IconButton;
