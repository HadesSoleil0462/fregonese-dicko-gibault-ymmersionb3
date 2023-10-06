const data = require("../data.json");
const fs = require('fs');

/**
 * Get all the flowers.
 * @param {*} req 
 * @param {*} res All the flowers
 */
exports.getFlowers = (req, res) => {
    const flowers = data.flowers;

    res.send(flowers);
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

    if (!flower) {
        res.status(404).send({ message: "Flower not found" });
    } else {
        res.status(200).send(flower);
    }
};

/**
 * Get all the flowers by the name.
 * @param {*} name Name of a flower
 * @param {*} res flowers corresponding to the name
 */
exports.getFlowersByName = (req, res) => {
    const name = req.params.name;
    const flowers = data.flowers;

    console.log('Nom de la fleur recherchée :', name);

    const flowersByName = flowers.filter(flower => flower.FlowerName === name);
    console.log('Résultat de la recherche :', flowersByName);

    if (!flowersByName) {
        res.status(404).send({ message: "Flowers not found" });
    } else {
        res.status(200).send(flowersByName);
    }
};

/**
 * Get a flower by the season.
 * @param {*} req flower season
 * @param {*} res flower corresponding to the season
 */
exports.getFlowersBySeason = (req, res) => {
    const season = req.params.season;
    const flowers = data.flowers;
    const flower = flowers.filter(f => f.Season === season);

    if (!flower) {
        res.status(404).send({ message: "Flower not found" });
    } else {
        res.status(200).send(flower);
    }
};

/**
 * Add one flower to the roster.
 * @param {*} req 
 * @param {*} res 
 */
exports.addFlower = (req, res) => {
    const flower = req.body;
    const maxId = data.flowers.reduce(
        (previous, current) => (previous && previous.id > current.id) ? previous : current
    );
    flower.id = maxId.id + 1;
    console.log(maxId)
    var file = fs.readFileSync("data.json");
    var myObject = JSON.parse(file);
    myObject.flowers.push(flower);

    var newData = JSON.stringify(myObject, null, 2);
    fs.writeFile("data.json", newData, err => {
        // error checking
        if (err) throw err;

        console.log("New data added");
    });
    res.json(flower);
};