const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const flowerRoutes = require("./routes/flowers");
const customerRoutes = require("./routes/customers")

app.use(cors({
    origin: '*'
}));

app.use(flowerRoutes);
app.use(customerRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));