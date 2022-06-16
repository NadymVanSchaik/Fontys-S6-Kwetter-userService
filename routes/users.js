const express = require('express');
const router = express.Router();
const User = require('../models/User')
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var jsonParser = bodyParser.json();


module.exports = router;