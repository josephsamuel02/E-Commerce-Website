const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
    try {
        const payment = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "usd",
            payment_method: req.body.tokenId,
            confirm: true,
        });

        // console.log("payment", payment);

        res.status(200).json(payment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
