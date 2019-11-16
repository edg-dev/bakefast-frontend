import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
	// Project Settings => Add Firebase to your web app
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""

});

const messaging = initializedFirebaseApp.messaging();messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  ""
);

export { messaging };