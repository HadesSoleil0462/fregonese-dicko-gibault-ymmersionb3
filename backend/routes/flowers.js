const express = require("express");
const router = express.Router();
const controllers = require("../controllers/flower");

//Route to get all the flowers.
router.get("/flowers", (req, res) => {
    controllers.getFlowers(req, res)
});

//Route to get a flower by the id
router.get("/flowers/:id", controllers.getFlowerById);

//Route to get all the flowers by the name
router.get("/flowers/names/:name", controllers.getFlowersByName);

//Route to get all the flowers by the season
router.get("/flowers/seasons/:season", controllers.getFlowersBySeason);

//Route to add one flower to the roster.
router.post("/flowers", controllers.addFlower);

module.exports = router;