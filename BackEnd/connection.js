require('dotenv').config();
const { log } = require('console');
const fs = require('fs');
const mariadb = require('mysql');

const connection = mariadb.createPool({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME
    
    })
 
    connection.getConnection((err,client)=>{
        if(!err){
            console.log('Connected');
        }
        else{
            console.log(err);
        }
    })











module.exports = connection;