var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

var app = express();

var corsOption = {
    origin:"http://localhost:4200"
};

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var db = require("./model/index");


db.mongoose.connect(db.url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.warn("database connected successfully");
}).catch((err)=>{
    console.warn("connectionn failed",err);
})

app.get("/",function(req,res){
    res.send("welcome to node api app");
});

require("./routes/product.route")(app);

app.listen(4000,function(){
    console.warn("server is running on port : 4000");
})


