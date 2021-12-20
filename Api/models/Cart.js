const mongoose = require("mongoose");

const cartShema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        product: [
            {
                productId: { type: String, required: true },
                quantity: { type: Number, default: 1 },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", cartShema);
