const data = require("../data.json");
const fs = require("fs");
const bcrypt = require("bcrypt");


/**
 * Log in a customer
 * @param {*} req customer email and password
 * @param {*} res 
 */
exports.loginCustomer = (req, res) => {
    //Capture user inputs
    const userEmail = req.body.email;
    const password = req.body.password;

    //If inputs are not empty
    if (userEmail && password) {
        //Search admin to log in
        const customer = data.customers.find(
            cu => cu.User === userEmail && cu.Password === password
            );
        //If no admin found
        if (!customer) {
            res.status(401).send({message: "Authentication failed: user is not an admin"});
        } else {
            req.session.loggedin = true;
            req.session.username = userEmail;
            //redirect to the home page
            res.redirect("/flowers");
        }
        res.end();
    } else {
        res.status(401).send("Incorrect username and/or password");
        res.end();
    }
};

/**
 * Register a new customer to the database
 * @param {*} req 
 * @param {*} res 
 */
exports.registerCustomer = async (req, res) => {
    const customers = data.customers;
    //Capture customer inputs
    const email = req.body.email;
    const password = req.body.password;
    
    console.log(email);
    //Check if the customer already exist
    const foundCustomer = customers.find(customer =>  customer.Email === email);
    //If the customer does not exist
    if (!foundCustomer) {
        //Register a new customer
        const hashPassword = await bcrypt(password, 10);
        let file = fs.readFileSync("data.json");
        let myObject = JSON.parse(file);
        
    } else {
        
    }

};