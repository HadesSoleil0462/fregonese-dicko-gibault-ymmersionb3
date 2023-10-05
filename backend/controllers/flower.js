const data = require("../data.json");

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

    if(!flower){
        res.status(404).send({message : "Flower not found"});
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
    
    const flowerByName = flowers.find(flower => flower.FlowerName === name);
    console.log('Résultat de la recherche :', flowersByName);
    
    if(!flowerByName){
        res.status(404).send({message : "Flowers not found"});
    } else {
        res.status(200).send(flowersByName);
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
        const flower = {};
        flower.id = maxId.id + 1;
        flower.FlowerName = req.body.FlowerName;
        flower.Type = req.body.Type;
        flower.Tips = req.body.Tips;
        flower.Pic_URL = req.body.Pic_URL;
        flower.Price = Number(req.body.Price);
        flowers.push(flower);
        res.status(201).json({message : "Flower successfully created and added"});
    } else {
        res.status(511).send({message : "Admin only"});
    }
};