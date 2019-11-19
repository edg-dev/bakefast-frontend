import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
	// Project Settings => Add Firebase to your web app
  apiKey: "AIzaSyBUjN-Te9hAhxuOscaHzuiVt2xLCWXpkyU",
  authDomain: "bakefastapp.firebaseapp.com",
  databaseURL: "https://bakefastapp.firebaseio.com",
  projectId: "bakefastapp",
  storageBucket: "bakefastapp.appspot.com",
  messagingSenderId: "271023922045",
  appId: "1:271023922045:web:a9b8ce83262dce926d0a14"
});


const messaging = initializedFirebaseApp.messaging();



messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BP9LibwnIbU5yG1taE0y-v2J06ErMXG451lF5TIN7pHu9ulVdaw1X3eZDsWpMvXpneYbTfjf_H3lahAdsEK69cI"
);

export { messaging };