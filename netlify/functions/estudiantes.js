var express = require('express');
var cors = require("cors");
var serverless = require ('serverless-http');
var port = process.env.PORT || 5000;
var estudiantesroutes = require("../../Backend/routes/estudiantesroutes.js");
var app = express();
app.use(express.json());
app.use(cors());

var router = express.Router();
router.use ("/estudiantes",estudiantesroutes);
var handler = app.use ('/.netlify/functions',router);
module.exports.handler = serverless(app);