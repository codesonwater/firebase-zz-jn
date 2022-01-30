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

// create a collection called "restaurants" as a variable 'restRef'
const shopRef = db.collection('customers')

// 3a) CREATE A DOC
shopRef.doc('cust789').set({
    firstName: "Archie",
    lastName: "Octavius",
    billingAddress1: "777 Heaven's Door",
    billingAddress2: "",
    city: "Hell",
    state: "MI",
    postal: "49232", 
    email: "paradoxparadigm@yahoo.com",
    phone: "8108746734",
    returnCust: false,
    productArray: [{price: 40,productId: 100, qty: 3}, {price: 35, productId: 101, qty: 1}]
})
 .then(()=> {
     console.log('Added Customer')
 }).catch(console.error);


// 3b) READ A DOC  
// shopRef
//   .doc("cust123")
//   .get()
//   .then((doc) => {
//     console.log(doc.id, "-->", doc.data());
//   })
//   .catch(console.error);


// 3c) READ A COLLECTION
// shopRef.get()
//  .then(snapshot => {
//      snapshot.forEach(doc => {
//          console.log(doc.data())
//      });
//  })
//  .catch(console.error);

// 3d) UPDATE A COLLECTION AND ADD A FIELD
// shopRef.doc('cust123').update({returnCust: false, firstName:'updated to Archibald', country: 'USA'})
//added country field
