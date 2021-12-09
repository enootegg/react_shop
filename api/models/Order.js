const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        productName: {
          type: String,
        },
        productPrice: {
          type: Number,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        productPriceAll: {
          type: Number,
        },
      },
    ],
    city: { type: String, required: true },
    delivery: { type: String, required: true },
    deliverySum: { type: Number, required: true },
    tel: { type: String, required: true },
    total: { type: Number, required: true },
    status: { type: String, default: "Розглядається" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
