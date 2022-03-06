import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB7UEx8CpAYRtb1erVDnIWaiUrckA7eSXI",
  authDomain: "storytelling-1d4f3.firebaseapp.com",
  databaseURL: "https://storytelling-1d4f3-default-rtdb.firebaseio.com",
  projectId: "storytelling-1d4f3",
  storageBucket: "storytelling-1d4f3.appspot.com",
  messagingSenderId: "607206224176",
  appId: "1:607206224176:web:78d3a5e14396117de158f5"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.database()