const express = require("express");

const app = express();

app.get("/",(req, res)=>{res.send("Hello caras")});


app.listen(3000);