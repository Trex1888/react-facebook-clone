import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQUxbocP9F3eJjTsKPDgvaV1cQkgjXnGg",
  authDomain: "facebook-clone-8e41b.firebaseapp.com",
  projectId: "facebook-clone-8e41b",
  storageBucket: "facebook-clone-8e41b.appspot.com",
  messagingSenderId: "292398323187",
  appId: "1:292398323187:web:29aa67cfa11c486915ee86",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
