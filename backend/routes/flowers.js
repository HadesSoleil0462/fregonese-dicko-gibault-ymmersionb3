const express = require("express");
const router = express.Router();
const controllers = require("../controllers/flower");

//Route to get all the flowers.
router.get("/flowers", controllers.getFlowers);

//Route to get all the flowers by the name
router.get("/flowers/:name", controllers.getFlowersByName);

//Route to add one flower.
router.post("/addflowers", controllers.addFlowers);

module.exports = router;