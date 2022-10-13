// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApiCPzfxyn2lDljTOhro56fTNRSUy0Uzo",
  authDomain: "mushnews-6329f.firebaseapp.com",
  projectId: "mushnews-6329f",
  storageBucket: "mushnews-6329f.appspot.com",
  messagingSenderId: "886880956192",
  appId: "1:886880956192:web:726a368fa6e77a51aff145",
  measurementId: "G-J17FR82ZBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export const user = () => {
onAuthStateChanged(auth, (user) => {
  if(user){
    console.log("user", user)
  }else {
    console.log('user not found');
  }
})
}
