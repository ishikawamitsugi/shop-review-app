import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type Props = {
  onChangeText: (text: string) => void;
  value: string;
  label: string;
  placeholder?: string;
};

export const TextArea: React.FC<Props> = ({
  value,
  onChangeText,
  label,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textArea}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        multiline={true}
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontWeight: "bold",
    color: "#999",
  },
  textArea: {
    textAlignVertical: "top",
    borderColor: "#999",
    borderBottomWidth: 1,
    height: 120,
    marginTop: 8,
  },
});
