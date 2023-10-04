const express = require('express');
const app = express();

const { User } = require("./models");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/",(req,res)=> {
    res.render('index',{
        title: "Welcome , This is Home page"
    });
})

module.exports = app;
