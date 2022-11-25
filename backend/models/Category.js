const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    parent: { type: String, default: "0", required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Category", CategorySchema);
