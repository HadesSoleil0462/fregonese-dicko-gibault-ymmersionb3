const express = require("express");
const router = express.Router();
const controllers = require("../controllers/admin");

//Route to log in an admin
router.post("/admin/login", controllers.loginAdmin);

//Route to add a flower while logged as an admin
router.post("/addflowers", controllers.addFlower);

module.exports = router;