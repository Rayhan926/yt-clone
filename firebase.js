import firebase from "firebase";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBaGU24tiW1xPqwUrJjWGWQX5uHabNbDNs",
  authDomain: "clone-y-t.firebaseapp.com",
  projectId: "clone-y-t",
  storageBucket: "clone-y-t.appspot.com",
  messagingSenderId: "409060189418",
  appId: "1:409060189418:web:416fc7d34599e3b744e393"
};
// firebase.initializeApp(firebaseConfig);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase.auth();
