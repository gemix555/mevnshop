const dollarsToCents = require('dollars-to-cents')
const Stripe = require('stripe');
const stripe = Stripe('pk_test_51I5CI4IfRzrZzVqFhjeJUVHEQpv2LTXXNBUZrxQuIjn3NiBz8p60ycIySn6gnL4MMUUdYZx3ThO4iVOeLHonMyju00OYrCb3dI')

const createPaymentIntent = async ({body: { amount }}, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: dollarsToCents(amount),
            currency: 'eur',
            payment_method_types: ['card'],
        })
        return res.status(200).send(paymentIntent)
    }catch (err) {
        res.status(500).send(err)
    }
}


module.exports = {
    createPaymentIntent
}