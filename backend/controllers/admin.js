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

    console.log(req.body);

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
            res.status(200).send({ message : "Admin logged successfully" });
        }
    } else {
        res.status(401).send("Incorrect username and/or password");
    }
};