const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const cors = require("cors");
const flowerRoutes = require("./routes/flowers");

app.use(bodyParser.json({limit: '50mb'}));

app.use(cors({
    origin: '*'
}));

app.use(flowerRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));