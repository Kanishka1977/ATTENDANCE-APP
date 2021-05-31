import * as firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyD9bgF_d6AI8LNygx895IkXYYVXXRsZzis",
    authDomain: "school-attendance-74f78.firebaseapp.com",
    databaseURL: "https://school-attendance-74f78-default-rtdb.firebaseio.com",
    projectId: "school-attendance-74f78",
    storageBucket: "school-attendance-74f78.appspot.com",
    messagingSenderId: "728695905697",
    appId: "1:728695905697:web:4971bbb4bc668c37297fe0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();
 
 

  