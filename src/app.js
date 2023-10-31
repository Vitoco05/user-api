const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');
const errorHandler = require('./utils/errorHandler.js');

const app = express();

app.use(express.json());
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use('/api/v1',router);
app.get("/", (req, res) => {
  return res.send("Welcome to node");
});


app.use(errorHandler);

module.exports = app;