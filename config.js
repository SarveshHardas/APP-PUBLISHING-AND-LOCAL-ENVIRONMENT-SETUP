import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCwnqtjI5GmRnFOoklOsZIska6C-U_ewco',
  authDomain: 'attendence-app-dcf39.firebaseapp.com',
  databaseURL: 'https://attendence-app-dcf39-default-rtdb.firebaseio.com',
  projectId: 'attendence-app-dcf39',
  storageBucket: 'attendence-app-dcf39.appspot.com',
  messagingSenderId: '400297545884',
  appId: '1:400297545884:web:1f059b8e81c6df064c1d59',
};

const app = firebase.initializeApp(firebaseConfig);

export default firebase.database();
