import firebase from 'firebase';
import 'firebase/firestore';

export type User = {
    id?: string,
    name: string;
    createdAt: firebase.firestore.Timestamp;
    updatedAt: firebase.firestore.Timestamp;
}

export const initialUser: User = {
    name: "",
    updatedAt: firebase.firestore.Timestamp.now(),
    createdAt: firebase.firestore.Timestamp.now(),
  };