// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

import {getMessaging, getToken, onMessage} from 'firebase/messaging'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj3dFvAtKi9RFZMA7JTw61dSPyKEgHbN4",
  authDomain: "todo-app-bce8d.firebaseapp.com",
  projectId: "todo-app-bce8d",
  storageBucket: "todo-app-bce8d.appspot.com",
  messagingSenderId: "625989940056",
  appId: "1:625989940056:web:0bba4ae8b6f53de585eb2d"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);



const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'BMyg7K5uzun_SjvDWSxpyIsaiHQowcO-vz4SipOFq7N536OfI9zRPnsXEdRfbtrqKtjWwGrYM4XUJVfhAqzvb-Q' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};



export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});

export default firebase

