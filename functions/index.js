const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J0Y5OC0qDibsqWETcpfXMFMGstgPqWL4ugPhTd4A2Bx1FlovYmw8rarXahRK6sWr7KRtcjAcbD7MT3Lfscg2dpZ00pURC5EGL"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("backend>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "cad",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
