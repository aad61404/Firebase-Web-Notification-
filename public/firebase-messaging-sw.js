importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');
importScripts('/__/firebase/init.js');
// var firebaseConfig = {
//     apiKey: "AIzaSyDYDCcag_fnrz6u1fhOlDUmnyiPgHrJrJs",
//     authDomain: "web-notification-61213.firebaseapp.com",
//     databaseURL: "https://web-notification-61213.firebaseio.com",
//     projectId: "web-notification-61213",
//     storageBucket: "web-notification-61213.appspot.com",
//     messagingSenderId: "726401871837",
//     appId: "1:726401871837:web:00ecf8243f64ecd205d034",
//     measurementId: "G-PKKFBCVR87"
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();
// messaging.usePublicVapidKey("BPPNEWamSL4yvTZt07V7I_3BAK8qnDgAWdoj5r_7ukRi9reBBtSajGJdbMqqnk9MWKD52Z7RBvQYOgHP9f2IbEA");

// messaging.requestPermission()
// .then(function(){
//     console.log('Have Permission')
//     return messaging.getToken();
// })
// .then(function(token){
//     console.log('------------get Token--------------')
//     console.log(token);
// })
// .catch(function(err){
//     console.log(err);
// })

// messaging.onMessage(function(payload){
//     console.log('onMessage:' , payload);
// })