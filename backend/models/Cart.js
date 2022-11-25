const mongoose = require("mongoose");
const boolean = require("webibl-conversions");
const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    product: [
      {
        productId: { type: String },
        quanlity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", CartSchema);
