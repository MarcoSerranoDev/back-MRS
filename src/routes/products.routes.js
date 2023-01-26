const { Router } = require("express");
const router = Router();

//Import controller
const ctrProduct = require("../controllers/products.controller");

router.get("/", ctrProduct.getProducts);

module.exports = router;
