// This is your test secret API key.
const stripe = require('stripe')('sk_test_51IW0ikHz4kVRu2ZU8gclqNH92VPKdX8SQjUXyI0ov26jXB6DcLX0Zmd8ZQuBuWqikTLBJrFLfg15muSWlCDQqVkp00bMTqUY1l');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json())

const YOUR_DOMAIN = 'http://localhost:4200';


app.post('/checkout', async (req, res) => {
  const items = req.body.items.map((item)=> {
    return{
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          images:[item.image]
        },
        unit_amount: item.price *100
      },
      quantity: 1
    }
  }) 
  const session = await stripe.checkout.sessions.create({
    line_items: [...items],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/inicio`,
    cancel_url: `${YOUR_DOMAIN}/inicio`
  })

  res.status(200).json(session)
});


app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.listen(4242, () => console.log('Running on port 4242'));