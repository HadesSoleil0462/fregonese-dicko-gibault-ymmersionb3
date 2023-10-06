const data = require("../data.json");
const fs = require("fs");
const bcrypt = require("bcrypt");


/**
 * Log in a customer
 * @param {*} req customer email and password
 * @param {*} res 
 */
exports.loginCustomer = async (req, res) => {
    //Capture user inputs
    const userEmail = req.body.email;
    const password = await bcrypt.hash(req.body.password, 10);

    //If inputs are not empty
    if (userEmail && password) {
        //Search admin to log in
        const customer = data.customers.find(
            cu => cu.Email === userEmail && bcrypt.compare(cu.Password, password)
            );
        //If no admin found
        if (!customer) {
            res.status(401).send({message: "Authentication failed: user not registered"});
        } else {
            req.session.loggedin = true;
            req.session.username = userEmail;
            //redirect to the home page
            res.redirect("/flowers");
        }
    } else {
        res.status(401).send("Incorrect username and/or password");
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
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = {
            Email: email,
            Password: hashPassword,
            FirstName: req.body.firstname,
            LastName: req.body.lastname,
            PhoneNumber: req.body.phone,
            PostalAddress: req.body.adress,
            Cart: null,
            RegistrationDate: Date.now()
        };
        console.log(newUser);
        let file = fs.readFileSync("data.json");
        let myObject = JSON.parse(file);
        myObject.customers.push(newUser);
        let newData = JSON.stringify(myObject, null, 2);
        fs.writeFile("data.json", newData, err => {
            //error catching
            if (err) throw err;

            console.log("New data added");
        });
        res.status(200).send({ message: "Customer added sucessfully"});

    } else {
        res.status(400).send({ message : "Customer already exist"});
    }

};