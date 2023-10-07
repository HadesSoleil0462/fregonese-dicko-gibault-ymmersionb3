const express = require("express");
const router = express.Router();
const controllers = require("../controllers/admin");

//Route to log in an admin
router.post("/admin/login", controllers.loginAdmin);

module.exports = router;