const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const flowerRoutes = require("./routes/flowers");
const session = require("express-session");

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({
    extended: false;
}));

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));

app.use(flowerRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));