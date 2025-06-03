const express = require('express');
const cors = require("cors");
const serverless = require('serverless-http');
const estudiantesroutes = require("../../Backend/routes/estudiantesroutes.js");
const app = express();

app.use(express.json());
app.use(cors());


app.use('/.netlify/functions/estudiantes', estudiantesroutes);

module.exports.handler = serverless(app);