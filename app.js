console.log(firebase)

var firebaseConfig = {
    apiKey: "AIzaSyAIYCKRsf938EnXx2zuu78eHC9X1V2AI_4",
    authDomain: "assignmentcloudcomputing-7324f.firebaseapp.com",
    projectId: "assignmentcloudcomputing-7324f",
    storageBucket: "assignmentcloudcomputing-7324f.appspot.com",
    messagingSenderId: "922181821257",
    appId: "1:922181821257:web:af15ca80fafa5fdbc6f098",
    measurementId: "G-42J0FJY2RV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.database().ref('data').on('value', (snap) => {
    console.log(snap.val());
});