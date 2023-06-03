import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDCZ-VkkshocTUM5HyrpQyErlrombrTvHg",
    authDomain: "catch-of-the-day-a8059.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-a8059-default-rtdb.firebaseio.com",
    projectId: "catch-of-the-day-a8059",
    storageBucket: "catch-of-the-day-a8059.appspot.com",
    messagingSenderId: "537737760177",
    appId: "1:537737760177:web:b7fff871c001df32b84190",
    measurementId: "G-6HM5480T9L",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export default app;

export { provider };
