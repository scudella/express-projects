const stripe = require('stripe')(process.env.STRIPE_KEY);

const stripeController = async (req, res) => {
  const { purchase, total_amount, shipping_fee } = req.body;

  // in a real project you would check these values with the database in the backend, and not just take whatever the frontend sent.
  // you would iterate over the list, you take the ids and communicate with the db and get back the correct prices. The user in the frontend can easily manipulate with the values.
  const calculateOrderAmount = () => {
    return total_amount + shipping_fee;
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: 'usd',
  });
  res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = stripeController;
