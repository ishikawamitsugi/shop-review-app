import firebase from 'firebase';
import 'firebase/firestore';

type UserRef = {
    id: string;
    name: string;
}

type ShopRef = {
    id: string;
    name: string;
}

export type Review = {
    id?:string;
    score: number;
    text: string;
    user: UserRef;
    shop: ShopRef;
    createdAt: firebase.firestore.Timestamp;
    updatedAt: firebase.firestore.Timestamp;

}