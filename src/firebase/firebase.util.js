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

//get user info if it exist in the db
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef;
}

export const createNote = async (userId, note, additionalData) => {
    const dbNote = firestore.collection(`notes`).doc()
    const { title, mainText, background } = note
    const user = userId.id
    const createdAt = new Date();
    try {
        await dbNote.set({
            title,
            mainText,
            user,
            createdAt,
            background,
            ...additionalData
        });
    } catch (error) {
        console.log("error adding note", error.message)
    }

    return dbNote;
}

export const deleteNote = () => { }

export const updateNote = async (docId, note)=> {
    console.log("docId: ", docId)
    console.log("note: ", note)
    const dbNote = firestore.collection("notes").doc(`${docId}`)
    const { title, mainText, background } = note
    
    try {
        await dbNote.update({
            title: title,
            mainText: mainText,
            background: background
        });
    } catch (error) {
        console.log("error updating note", error.message)
    }
}

export const getNotes = async (userId) => {

    firestore.collection("notes").where("user", "==", `${userId.id}`).get().then(function (querySnapshot) {
        let notes = [];
        let test = {};
        querySnapshot.forEach(function (doc) {
            let docData = doc.data()
            let docId = doc.id
            const data= {docData, docId};
            notes.push(data)
        });
        for (let i =0; i< notes.length; i++){
            test[notes[i].docId]= notes[i].docData
        }
        //addNotes(test);

    })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//Sign In Set Up
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithEmailAndPassword = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(
        err => {
            const errorCode = err.code;
            const errorMessage = err.message;
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(err);
        }
    );
}


export default firebase;