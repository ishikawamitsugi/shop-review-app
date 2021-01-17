import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  star: {
    color: "#800",
    marginRight: 4,
  },
  scoreText: {
    color: "black",
  },
});

type Props = {
  score: number;
  starSize?: number;
  textSize?: number;
};
const Stars: React.FC<Props> = ({ score, starSize = 16, textSize = 14 }) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name={score >= 1 ? "star" : score >= 0.5 ? "star-half-o" : "star-o"}
        style={[styles.star, { fontSize: starSize }]}
      />
      <FontAwesome
        name={score >= 2 ? "star" : score >= 1.5 ? "star-half-o" : "star-o"}
        style={[styles.star, { fontSize: starSize }]}
      />
      <FontAwesome
        name={score >= 3 ? "star" : score >= 2.5 ? "star-half-o" : "star-o"}
        style={[styles.star, { fontSize: starSize }]}
      />
      <FontAwesome
        name={score >= 4 ? "star" : score >= 3.5 ? "star-half-o" : "star-o"}
        style={[styles.star, { fontSize: starSize }]}
      />
      <FontAwesome
        name={score >= 5 ? "star" : score >= 4.5 ? "star-half-o" : "star-o"}
        style={[styles.star, { fontSize: starSize }]}
      />
      <Text style={[styles.scoreText, { fontSize: textSize }]}>{score}</Text>
    </View>
  );
};

export default Stars;