import Firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAsHAjGNu2__wPFJJPWDxvdhCoZcNeW_hs",
    authDomain: "react-native-sample-ba4ef.firebaseapp.com",
    databaseURL: "https://react-native-sample-ba4ef.firebaseio.com",
    projectId: "react-native-sample-ba4ef",
    storageBucket: "react-native-sample-ba4ef.appspot.com",
    messagingSenderId: "172201920080",
    appId: "1:172201920080:web:b694d4433b7bdc7bae7355"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
