const express = require("express");
const router = express.Router();
const controllers = require("../controllers/admin");

//Route to log in an admin
router.post("/admin/login", controllers.loginAdmin);

router.post("/addflowers", controllers.addFlower);
router.get("/admins", (req, res) => {
    controllers.admins(req, res)
})

module.exports = router;