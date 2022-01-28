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

// create a doc
shopRef.doc('cust123').set({
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
})
 .then(()=> {
     console.log('Added Customer')
 }).catch((err)=>{console.error(err)})


// read a doc

// read a collection

// update a field and add a field to a doc







// add each restaurant
// restRef.add(restaurants[3]) // this will go into our database and add a restaurant as a doc with all that information
//  .then(doc=>{
//      console.log('Added restaurant', doc.id);
//  })
//  .catch(err =>{
//       console.error(err);
//  });

// read one document
// db.collection("restaurants")
//   .doc("fLhiCGRmKoJ20hm4VPPj")
//   .get()
//   .then((doc) => {
//     console.log(doc.id, "-->", doc.data()); // doc.data gets us the data from the document
//   })
//   .catch((err) => console.error(err));

// get all documents
// restRef
//   .get()
//   .then((snapshot) => {
//     //by convention we call getting a whole collection a snapshot
//     snapshot.forEach((doc) => {
//       console.log(doc.id, "-->", doc.data());
//     });
//   }) // callback function
//   .catch(console.error()); // this is equivalent to (err) => console.error(err)

// // querying a collection
// restRef.where('name', '==', 'Bolay').get()
//  .then(snapshot => {
//      snapshot.forEach(doc => {
//          console.log(doc.data())
//      });
//  })
//  .catch(console.error);