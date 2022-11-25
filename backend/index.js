const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on http://localhost:5000/");
});
