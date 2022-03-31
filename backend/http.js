 var  express  = require("express");
 var path = require("path");
 var bodyParser = require("body-parser");
 var multer = require("multer");
 var morgan = require("morgan");

 var app = express();

 app.use(express.static(path.join(__dirname,'assets')));
//  app.use(bodyParser.urlencoded({extended:false}));
//  app.use(bodyParser.json);
 app.use(morgan('combine'));

 app.get("/",function(req,res){
     //res.send("welcome to my node express");
    res.sendFile(__dirname + "/home.html");
 });


 var storage = multer.diskStorage({
     destination:function(req,file,cb){
         cb(null,'./upload');
     },
    filename:function(req,file,cb){
        cb(null,file.filename + '-' + Date.now() + path.extname(file.originalname));
    }
 })

//  app.post("/show_user",function(req,res){
//     console.warn(req.body.username);
//    res.json( {username: req.body.username});
// });

app.post('/upload',function(req,res){
    var upload = multer({
        storage:storage,
        fileFilter:function(req,file,cb){
            var ext = path.extname(file.originalname);
            if(ext != ".png" && ext != ".jpg"){
                return cb(res.end("only jpg and png is allowed"))
            }
                cb(null,true);
            
        }
    }).single('doc');
    upload(req,res,function(err){
        res.send("file is upload successfully");
    })
})

 app.post("/show_user",function(req,res){
     console.warn(req.body.username);
    res.json( {username: req.body.username});
 })
 
 app.get("/about",function(req,res){
    res.send("welcome to my node about");
});

app.get("/contact",function(req,res){
    res.send("welcome to my node contact");
});

 app.listen(4000,function(){
     console.warn("server is running on port 4000:");
 });