import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
LogBox.ignoreLogs(["Setting a timer"]);

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyD0UYMulmrUFnd5v57D8uh1dBaHtoBspDk",
    authDomain: "shop-review-9c17f.firebaseapp.com",
    projectId: "shop-review-9c17f",
    storageBucket: "shop-review-9c17f.appspot.com",
    messagingSenderId: "191235937623",
    appId: "1:191235937623:web:557aee08cbbaf8516d9a12",
    measurementId: "G-PX36JY14YY",
  };
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = snapshot.docs.map((doc) => doc.data());
    console.log(shops);
  };
  return (
    <View style={styles.container}>
      <Text>Oyour app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
