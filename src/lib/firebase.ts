import * as firebase from 'firebase';
import {Shop} from  '../type/shop';
import Constants from 'expo-constants';

if (!firebase.apps.length) {
    const firebaseConfig = Constants.manifest.extra.firebase;
    console.log(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
}

export const getShops = async () => {
    try {
        const snapshot = await firebase.firestore().collection("shops").where('place', '==', '品川').orderBy('score', 'desc').get();
        const shops: Shop[] = snapshot.docs.map((doc) => doc.data() as Shop);
        return shops;
    }
    catch (err) {
        console.log(err);
        return [];
    }
};