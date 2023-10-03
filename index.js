
const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/",(req,res)=> {
    res.render('index',{
        title: "Welcome , This is Home page"
    });
})

app.listen(port, () => {
    console.log(`Server started at node ${port}`);
  });
