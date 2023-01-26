const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const productsRoutes = require("./routes/products.router");
const emailRoutes = require("./routes/email.router");

//Initialization
const app = express();
require("./db");

//Settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/v1/products", productsRoutes);
app.use("/api/v1/email", emailRoutes);

module.exports = app;
