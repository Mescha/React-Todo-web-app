importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAj3dFvAtKi9RFZMA7JTw61dSPyKEgHbN4",
    authDomain: "todo-app-bce8d.firebaseapp.com",
    projectId: "todo-app-bce8d",
    storageBucket: "todo-app-bce8d.appspot.com",
    messagingSenderId: "625989940056",
    appId: "1:625989940056:web:0bba4ae8b6f53de585eb2d"
  };


  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });