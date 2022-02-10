import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAmRJiPOYS_meDJtoxk9Mc-2ljX1QU6vbg",
  authDomain: "react-authentication-5c902.firebaseapp.com",
  projectId: "react-authentication-5c902",
  storageBucket: "react-authentication-5c902.appspot.com",
  messagingSenderId: "618249031407",
  appId: "1:618249031407:web:5bf95bbfb4cad00225551a",
  measurementId: "G-XEBP4VRG8E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
