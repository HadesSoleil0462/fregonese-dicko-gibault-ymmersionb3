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
 * Get a flower by it's id.
 * @param {*} req flower id
 * @param {*} res flower corresponding to the id
 */
exports.getFlowerById = (req, res) => {
    const id = parseInt(req.params.id);
    const flowers = data.flowers;
    const flower = flowers.find(f => f.id === id);

    if(!flower){
        res.status(404).send({message : "Flower not found"});
    } else {
        res.status(200).json({
            message : "Flower found successfully",
            flower
        });
    }
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
            message: "Flowers found successfully",
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