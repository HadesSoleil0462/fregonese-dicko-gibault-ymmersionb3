const data = require("../data.json");


/**
 * log in an administrator
 * @param {*} req 
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
        res.status(511).send("Incorrect username and/or password");
        res.end();
    }
};