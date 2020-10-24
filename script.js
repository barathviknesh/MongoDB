const DB = require("./database/datadb");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors');

app.use(bodyparser.json());
app.use(cors({ origin: 'http://localhost:3009'}));
var studentcontrol = require('./routerhouse/router');


app.listen(3009, ()=>{
    console.log("port running on 3009")
});

app.use('/', studentcontrol);