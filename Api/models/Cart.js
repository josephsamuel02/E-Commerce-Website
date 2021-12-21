const mongoose = require("mongoose");

const cartShema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        product: [
            {
                productId: { type: String, required: true },
                title: { type: String, required: true },
                image: { type: String, required: true },
                price: { type: String, required: true },
                quantity: { type: Number, required: true },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", cartShema);
