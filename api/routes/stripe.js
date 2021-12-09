const router = require("express").Router();
const stripe = require("stripe")("sk_test_51JiH1RDmKAjom92PGQI7v8ciQWnfs4OQ4vb3Wnv8ovzFMvHyhiF8lLCdm4B0RurzQJiLhStUPSeMZPX93KFfVKJj003ofOxwNX");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;