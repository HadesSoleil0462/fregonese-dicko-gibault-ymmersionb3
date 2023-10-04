const express = require("express");
const router = express.Router();
const controllers = require("../controllers/flower");

//Route to get all the flowers.
router.get("/flowers", controllers.getFlowers);

//Route to get a flower by the id
router.get("/flowers/:id", controllers.getFlowerById);

//Route to get all the flowers by the name
router.get("/flowers/:name", controllers.getFlowersByName);

//Route to add one flower to the roster.
router.post("/flowers", controllers.addFlower);

module.exports = router;