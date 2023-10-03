const data = require("../data.json");

/**
 * Get all the flowers.
 * @param {*} req 
 * @param {*} res 
 */
exports.getFlowers = (req, res) => {
    const id = parseInt(req.params.id);
    const flowers = data.flowers;

    res.json(flowers);
}