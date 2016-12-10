importScripts("https://www.gstatic.com/firebasejs/3.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.6.1/firebase-messaging.js");

var config = {
    apiKey: "AIzaSyCHEAExrO-iv26ozyXLWBAAEhB8En2M2w4",
    authDomain: "lovelyproject-937a0.firebaseapp.com",
    databaseURL: "https://lovelyproject-937a0.firebaseio.com",
    storageBucket: "lovelyproject-937a0.appspot.com",
    messagingSenderId: "432958243384"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

