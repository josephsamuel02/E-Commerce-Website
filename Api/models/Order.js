const mongoose = require("mongoose");

const orderShema = new mongoose.Schema(
    {
        userEmail: { type: String, required: true },
        products: { type: Array, required: true },
        amount: { type: Number, required: true },
        receiversInfo: { type: Object, required: true },
        status: { type: String, default: "pending" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderShema);
