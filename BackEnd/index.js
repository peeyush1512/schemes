const express = require('express');
require('dotenv').config();
let cors =require('cors');
const bodyParser = require('body-parser')
const connection = require('./connection');
const login=require('./routes/login');





const app = express();


app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(bodyParser.json());


app.use('/login',login);








app.listen(process.env.PORT_SERVER || 3000 );
module.exports = app;

