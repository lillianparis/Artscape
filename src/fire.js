import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0-6Hfs-mPBB5Xyl3GyZ3tPPzDfSdEhaI",
    authDomain: "artscape-97160.firebaseapp.com",
    databaseURL: "https://artscape-97160.firebaseio.com",
    projectId: "artscape-97160",
    storageBucket: "artscape-97160.appspot.com",
    messagingSenderId: "706465248594",
    appId: "1:706465248594:web:bfae4b511225986cdd768b",
    measurementId: "G-58YLW8N1N8"
  };

  //Initialize firebase
   firebase.initializeApp(firebaseConfig);

   export const auth = firebase.auth();
   export const firestore = firebase.firestore();

   const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};



  