const data = require("../data.json");


/**
 * log in an administrator
 * @param {*} req admin user and password
 * @param {*} res 
 */
exports.loginAdmin = (req, res) => {
    //Capture user inputs
    const user = req.body.user;
    const password = req.body.password;

    //If inputs are not empty
    if (user && password) {
        //Search admin to log in
        const admin = data.admins.find(
            adm => adm.User === user && adm.Password === password
            );
        //If no admin found
        if (!admin) {
            res.status(401).send({message: "Authentication failed: user is not an admin"});
        } else {
            req.session.loggedin = true;
            req.session.username = user;
            //redirect to the page where an admin can add an article to the roster
            res.redirect("/addflowers");
        }
        res.end();
    } else {
        res.status(401).send("Incorrect username and/or password");
        res.end();
    }
};

/**
 * Add a flower to the roster
 * @param {*} req 
 * @param {*} res 
 */
exports.addFlower = (req, res) => {
    //check if the admin is logged in
    const isLogged = req.session.loggedin;

    if (isLogged) {
        const flowers = data.flowers;
        const maxId = flowers.reduce(
            (previous, current) => (previous && previous.id > current.id) ? previous : current
        );
        const flower = {};
        flower.id = maxId.id + 1;
        flower.FlowerName = req.body.flowername;
        flower.Type = req.body.type;
        flower.Season = req.body.season;
        flower.Stock = Number(req.body.stock);
        flower.Tips = req.body.tips;
        flower.Pic_URL = req.body.pic_url;
        flower.Price = Number(req.body.price);
        flowers.push(flower);
    } else {
        res.status(401).send("Unauthorized: not logged in as an admin");
        res.end();
    }
    
}