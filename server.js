const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

