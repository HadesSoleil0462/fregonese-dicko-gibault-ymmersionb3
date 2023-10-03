const express = require("express");
const router = express.Router();
const controllers = require("../controllers/flower");

/**
 * Route to get all the flowers.
 */
router.get("/flowers", controllers.getFlowers)

module.exports = router;