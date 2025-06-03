var express = require('express');
var cors = require("cors");
var serverless = require ('serverless-http');
var port = process.env.PORT || 5000;
var departamentoroutes = require("../../Backend/routes/departamentoroutes.js");
var app = express();
app.use(express.json());
app.use(cors());

var router = express.Router();
router.use ("/departamento",departamentoroutes);
var handler = app.use ('/.netlify/functions',router);
exports.handler = serverless (app);