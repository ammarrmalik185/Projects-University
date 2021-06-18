const firebaseConfig = {
    apiKey: "AIzaSyBlkw5UaSABXd1n7GG-8WwaDy3Qk-3YDb8",
    authDomain: "webengproj-reddit.firebaseapp.com",
    databaseURL: "https://webengproj-reddit-default-rtdb.firebaseio.com",
    projectId: "webengproj-reddit",
    storageBucket: "webengproj-reddit.appspot.com",
    messagingSenderId: "850119524140",
    appId: "1:850119524140:web:fec3d71a6adc49835c7689"
};
firebase.initializeApp(firebaseConfig);

let database = firebase.database();
let authentication =  firebase.auth();
let storage = firebase.storage()
