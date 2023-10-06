const express = require("express");
const router = express.Router();
const controllers = require("../controllers/customer");

//Route to log in a customer
router.post("/customer/login", controllers.loginCustomer);

//Route to register a new customer
router.post("/customer/register", controllers.registerCustomer);

module.exports = router;