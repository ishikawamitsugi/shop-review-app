import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type Props = {
  visible: boolean;
};
export const Loading: React.FC<Props> = ({ visible = false }) => {
  return (
    <React.Fragment>
      {visible && (
        <View style={styles.container}>
          <ActivityIndicator color={"#900"} size={"large"} />
        </View>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255,255,0.5)",
  },
});
