import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { Shop } from "../type/shop";
import Constants from "expo-constants";
import { User, initialUser } from "../type/user";
import { Review } from "../type/review";

if (!firebase.apps.length) {
  const firebaseConfig = Constants.manifest.extra.firebase;
  firebase.initializeApp(firebaseConfig);
}

export const getShops = async () => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection("shops")
      .orderBy("score", "desc")
      .get();
    const shops: Shop[] = snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id } as Shop;
    });
    return shops;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const signIn = async (): Promise<User> => {
  const userCredential = await firebase.auth().signInAnonymously();
  const userId = userCredential.user?.uid;
  const userDoc = await firebase
    .firestore()
    .collection("users")
    .doc(userId)
    .get();
  if (!userDoc.exists) {
    await firebase.firestore().collection("users").doc(userId).set({
      name: "",
      createdAt: initialUser.createdAt,
      udpatedAt: initialUser.updatedAt,
    });
    const loginUser: User = {
      ...initialUser,
      id: userId ?? "",
    };
    return loginUser;
  } else {
    return {
      ...userDoc.data(),
      id: userId,
    } as User;
  }
};

export const updateUser = async (
  params: any,
  userId: string
): Promise<void> => {
  await firebase.firestore().collection("users").doc(userId).set(params);
};

export const addReview = async (shopId: string, review: Review) => {
  try {
    await firebase
      .firestore()
      .collection("shops")
      .doc(shopId)
      .collection("review")
      .add(review);
  } catch (err) {
    alert(err);
  }
};

export const createReviewRef = async (shopId: string) => {
  try {
    return await firebase
      .firestore()
      .collection("shops")
      .doc(shopId)
      .collection("review")
      .doc();
  } catch (err) {
    alert(err);
  }
};

export const uploadImage = async (
  imageUrl: string,
  path: string
): Promise<string> => {
  // 画像をAPIを通じて取得
  const localUri = await fetch(imageUrl);

  // バイナリ形式に変換
  const blob = await localUri.blob();
  const ref = firebase.storage().ref().child(path);

  let downloadUrl = "";
  try {
    await ref.put(blob);
    downloadUrl = await ref.getDownloadURL();
    return downloadUrl;
  } catch (err) {
    console.log(err);
  }
  return downloadUrl;
};

export const getReviews = async (shopId: string) => {
  const reviewDocs = await firebase
    .firestore()
    .collection("shops")
    .doc(shopId)
    .collection("review")
    .orderBy("createdAt", "desc")
    .get();

  return reviewDocs.docs.map((doc) => {
    return { ...doc.data(), id: doc.id } as Review;
  });
};
