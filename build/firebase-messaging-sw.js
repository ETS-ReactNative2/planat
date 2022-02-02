 importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

//needed to deploy to firebase

 if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('../firebase-messaging-sw.js')
       .then(function(registration) {
       }).catch(function(err) {
       });
     }

 firebase.initializeApp({
     messagingSenderId: "1038255685950",
   })

 const initMessaging = firebase.messaging()
