import * as firebase from 'firebase';
import "firebase/auth";
import {Shop} from  '../type/shop';
import Constants from 'expo-constants';
import {User, initialUser} from '../type/user'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
if (!firebase.apps.length) {
    const firebaseConfig = Constants.manifest.extra.firebase;
    console.log(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
}

export const getShops = async () => {
    try {
        const snapshot = await firebase.firestore().collection("shops").orderBy('score', 'desc').get();
        const shops: Shop[] = snapshot.docs.map((doc) => doc.data() as Shop);
        return shops;
    }
    catch (err) {
        console.log(err);
        return [];
    }
};

export const signIn = async(): Promise<User> => {
  
    const userCredential = await firebase.auth().signInAnonymously();
    const userId = userCredential.user?.uid; 
    const userDoc = await firebase.firestore().collection('users').doc(userId).get();
    if ( !userDoc.exists) {
        await firebase.firestore().collection('users').doc(userId).set(initialUser);
        return {
            ...initialUser,
            uid: userId
        } as User;
    } else {
        return {
            ...userDoc.data(),
            id: userId
        } as User
    }
}