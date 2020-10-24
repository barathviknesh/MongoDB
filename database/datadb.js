const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoda",{ useNewUrlParser: true , useUnifiedTopology: true}, (error)=> {
    if(!error){
        console.log("success from mongoda");
    }
    else{
        console.log('Error inDB connection : ' + JSON.stringify(err, undefined, 2)); 
    }
});

module.exports =mongoose;