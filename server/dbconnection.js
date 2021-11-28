const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const cores = require("cors");
app.enable('case sensitive routing');
const db_con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"db_veerteja",
    multipleStatements:true,
})

app.use(bodyParser.urlencoded({
    extended: true
}));

db_con.connect((err)=>{
    if(!err)
    {
        console.log("database connection successfully");
    }
    else
    {
        console.log("database connection failed");
    }
})



module.exports = db_con;
