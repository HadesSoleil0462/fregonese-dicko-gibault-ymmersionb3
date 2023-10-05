const express = require("express");
const router = express.Router();
const controllers = require("../controllers/flower");

//Route to get all the flowers.
router.get("/flowers", (req, res) => {
    controllers.getFlowers(req, res)
});

//Route to get a flower by the id
router.get("/flowers/:id", (req, res) => {
    controllers.getFlowerById(req, res)
});

//Route to get all the flowers by the name
router.get("/flowers/:name", (req, res) => {
    controllers.getFlowersByName(req, res)
});

//Route to add one flower to the roster.
router.post("/flowers", controllers.addFlower);

module.exports = router;