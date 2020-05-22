import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCE9gXzRhi_FeYzE_IWFgCf80excbnino4",
    authDomain: "note-app-bd30a.firebaseapp.com",
    databaseURL: "https://note-app-bd30a.firebaseio.com",
    projectId: "note-app-bd30a",
    storageBucket: "note-app-bd30a.appspot.com",
    messagingSenderId: "628466549065",
    appId: "1:628466549065:web:c98f91fdd67e86f8e59a98",
    measurementId: "G-DNF5GFGHJW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;