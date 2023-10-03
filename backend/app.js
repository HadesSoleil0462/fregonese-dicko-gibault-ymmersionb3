const express = require("express");
const app = epxress();
const port = 3000;
const cors = require("cors");
const flowerRoutes = require("./routes/flowers");

app.use(cors({
    origin: '*'
}));

app.use(flowerRoutes);