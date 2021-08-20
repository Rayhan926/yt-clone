import firebase from "firebase";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBb6msd4fMX-x6wn0QxW_TcMJ9brDRsL3w",
  authDomain: "yt-clone-f364c.firebaseapp.com",
  projectId: "yt-clone-f364c",
  storageBucket: "yt-clone-f364c.appspot.com",
  messagingSenderId: "342024335891",
  appId: "1:342024335891:web:a6c8844a610a1c4c9605e6",
};

// firebase.initializeApp(firebaseConfig);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase.auth();
