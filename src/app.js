const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const productsRoutes = require("./routes/products.routes");

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

module.exports = app;
