const mongoose = require("mongoose");
const boolean = require("webibl-conversions");
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    product: [
      {
        userId: { type: String },
        quanlity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);
