// Initialize Firebase
var config = {
apiKey: "AIzaSyA55J97GxQCq4biiQ5wlts8EsmfmsuCR74",
authDomain: "temp-click-counter.firebaseapp.com",
databaseURL: "https://temp-click-counter.firebaseio.com",
projectId: "temp-click-counter",
storageBucket: "temp-click-counter.appspot.com",
messagingSenderId: "92523455250"
};

firebase.initializeApp(config);

var database = firebase.database(); //reference to database

