const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const flowerRoutes = require("./routes/flowers");

app.use(cors({
    origin: '*'
}));

app.use(flowerRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));