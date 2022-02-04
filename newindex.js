const express = require("express");
const { initializeApp, getApps, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const credentials = require("./credentials.json");

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3001;

function connectToFirestore() {
  if (!getApps().length) {
    initializeApp({
      credential: cert(credentials),
    });
  }
  return getFirestore();
}

// read a collection
app.get("/customers", (req, res) => {
  const db = connectToFirestore();
  db.collection("customers")
    .get()
    .then((snapshot) => {
      const customers = snapshot.docs.map((doc) => {
        let customer = doc.data();
        customer.id = doc.id;
        return customer;
      });
      res.status(200).send(customers);
    })
    .catch(console.error);
});
// read a single doc
app.get("/customers/cust123", (request, response) => {
  const db = connectToFirestore();
  db.collection("customers")
    .doc("cust123")
    .get()
    .then((doc) => {
      response.status(200).send(doc.data());
    })
    .catch(console.error);
});

// add a doc to a collection
app.post('/customers', (request, response) => {
  const db = connectToFirestore();
  db.collection('customers')
    .add(request.body)
    .then(() => response.send(request.body))
    .catch(console.error);
});

// update a collection
app.patch('/customers', (request, response) => {
  const customer = request.body
  const db = connectToFirestore();
  db.collection('customers').doc(customer.id)
  .update(customer)
  .then(() => response.send('Update completed successfully'))
  .catch(console.error);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

