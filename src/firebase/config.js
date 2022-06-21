// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnTozpoyKSWNd7yrkEu97SABlSddOCFx4",
  authDomain: "shaggieburguer-5b1d2.firebaseapp.com",
  projectId: "shaggieburguer-5b1d2",
  storageBucket: "shaggieburguer-5b1d2.appspot.com",
  messagingSenderId: "658126226671",
  appId: "1:658126226671:web:969b2419183454c1c1871a"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
} 