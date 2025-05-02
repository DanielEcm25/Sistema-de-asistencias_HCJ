var express = require('express');
var cors = require("cors");
var serverless = require ('serverless-http');
var port = process.env.PORT || 5000;
var app = express();
var estudiantesroutes = require("../../Backend/routes/estudiantesroutes");
app.use(express.json());
app.use(cors());

var router = express.Router();
router.use ("/",estudiantesroutes);
app.use ("/",router);
exports.handler = serverless (app);