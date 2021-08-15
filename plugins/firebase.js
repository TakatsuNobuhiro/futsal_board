import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyAOkWhTW6pB_9ax_1vde0SFHGOCcqJVsP4",
  authDomain: "futsal-board-375be.firebaseapp.com",
  projectId: "futsal-board-375be",
  storageBucket: "futsal-board-375be.appspot.com",
  messagingSenderId: "203705832898",
  appId: "1:203705832898:web:dfd19c1c84c04cfcc5f25b",
  measurementId: "G-W9ZX7PMMZN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
