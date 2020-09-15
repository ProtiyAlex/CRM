const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const analyticsRoutes = require("./routes/analytics");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const mongoose = require("mongoose");
const positionRoutes = require("./routes/position");
const keys = require("./config/keys");
const app = express();

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("mongo работает"))
  .catch((error) => console.log(error));

app.use(require("morgan")("dev"));
app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("./routes/analytics", analyticsRoutes);
app.use("./routes/category", categoryRoutes);
app.use("./routes/order", orderRoutes);
app.use("./routes/position", positionRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "mes",
  });
});

module.exports = app;
