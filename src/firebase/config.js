import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD8OvoozapyrbLKgpJG6aqNA49xbvhx4Ns",
    authDomain: "shaggieburguer.firebaseapp.com",
    projectId: "shaggieburguer",
    storageBucket: "shaggieburguer.appspot.com",
    messagingSenderId: "694012808210",
    appId: "1:694012808210:web:4f9f1b93e9cfbd6a6d5ccb"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
} 