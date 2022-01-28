// import a set of tools to talk to firebase and Firestore
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

// import our credentials
const credentials = require("./credentials.json");

//create firebase services
initializeApp({
  credential: cert(credentials),
});

// connect to Firestore
const db = getFirestore();

