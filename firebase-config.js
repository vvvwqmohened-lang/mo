// firebase-config.js - ملف التكوين المركزي لـ Firebase
/*const firebaseConfig = {
    apiKey: "AIzaSyBygVOgLelAsR0k0MiH6CoQAAuVPKX",
    authDomain: "myproject-b6353.firebaseapp.com",
    databaseURL: "https://myproject-b6353-default-rtdb.firebaseio.com",
    projectId: "myproject-b6353",
    storageBucket: "myproject-b6353.firebasestorage.app",
    messagingSenderId: "339621647444",
    appId: "1:339621647444:web:8e0becdac3a46350d549c1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();*/
// firebase-config.js
// إعدادات Firebase المركزية
const firebaseConfig = {
  apiKey: "AIzaSyBygVOgLelAsR0k0MiH6CoQAAuVPKXC0EE",
  authDomain: "myproject-b6353.firebaseapp.com",
  databaseURL: "https://myproject-b6353-default-rtdb.firebaseio.com",
  projectId: "myproject-b6353",
  storageBucket: "myproject-b6353.appspot.com",
  messagingSenderId: "339621647444",
  appId: "1:339621647444:web:8e0becdac3a46350d549c1"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();
console.log('✅ Firebase initialized successfully');
