import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAcHwLQV9h1lH7xOSGdg2-w_xgu6wSAxUQ",
  authDomain: "fir-graph-nivo.firebaseapp.com",
  databaseURL: "https://fir-graph-nivo.firebaseio.com",
  projectId: "fir-graph-nivo",
  storageBucket: "fir-graph-nivo.appspot.com",
  messagingSenderId: "11683854740",
  appId: "1:11683854740:web:cfa83cd451c58c8242b781",
  measurementId: "G-N7NY4VT5YE",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
