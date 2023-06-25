const express = require('express');
require('dotenv').config();
let cors =require('cors');
const bodyParser = require('body-parser')
const connection = require('./connection');

//routes import
const login=require('./routes/login');
const captcha=require('./routes/captcha');
const profile=require('./routes/profile');





const app = express();


app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(bodyParser.json());

//routes use
app.use('/login',login);
app.use('/captcha',captcha);
app.use('/profile',profile);








app.listen(process.env.PORT_SERVER || 3000 );
module.exports = app;

