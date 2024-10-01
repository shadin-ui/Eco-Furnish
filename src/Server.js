
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('your-secret-key-here'); // Replace with your Stripe secret key

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // amount in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr', // Change to your desired currency
    });
    res.send({ id: paymentIntent.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
