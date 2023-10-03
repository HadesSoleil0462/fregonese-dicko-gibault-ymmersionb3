const data = require("../data.json");

/**
 * Get all the flowers.
 * @param {*} req 
 * @param {*} res All the flowers
 */
exports.getFlowers = (req, res) => {
    //const id = parseInt(req.params.id);
    const flowers = data.flowers;

    res.json(flowers);
};

/**
 * Get all the flowers by the name.
 * @param {*} req Name of a flower
 * @param {*} res flowers corresponding to the name
 */
exports.getFlowersByName = (req, res) => {
    const name = req.params.name.toLowerCase();
    const flowers = data.flowers;
    const flowersByNames = flowers.filter(flower => flower.FlowerName.toLowerCase() === name);

    if(flowersByNames.length === 0){
        res.status(404).send({message : "Flowers not found"});
    } else {
        res.status(200).json({
            message: "Flowers found succeffully",
            flowersByNames
        });
    }
};

/**
 * Add one flower to the roster.
 * @param {*} req 
 * @param {*} res 
 */
exports.addFlower = (req, res) => {

};