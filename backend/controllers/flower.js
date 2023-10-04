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
    const flowersByName = flowers.filter(flower => flower.FlowerName === name);

    if(flowersByName.length === 0){
        res.status(404).send({message : "Flowers not found"});
    } else {
        res.status(200).json({
            message: "Flowers found successfully",
            flowersByName
        });
    }
};

/**
 * Add one flower to the roster.
 * @param {*} req 
 * @param {*} res 
 */
exports.addFlower = (req, res) => {
    const users = data.admins;
    const admin = users.find(a => a.User === users.User);
    const password = req.body.password;

    //If user is an administrator
    if (admin && admin.password === password) {
        const flowers = data.flowers;
        //Get the max id flower
        const maxId = flowers.reduce(
            (previous, current) => (previous && previous.id > current.id) ? previous : current
        );
        const flower = {
            "id" : maxId.id + 1,
            "FlowerName" : req.body.FlowerName,
            "Type" : req.body.Type,
            "Tips" : req.body.Tips,
            "Pic_URL" : req.body.Pic_URL,
            "Price" : Number(req.body.Price)
        };
        flowers.push(flower);
        res.status(201).json({message : "Flower successfully created and added"});
    } else {
        res.status(511).send({message : "Admin only"});
    }
};