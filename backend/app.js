const { rejects } = require("assert");
var fs = require("fs");
const { resolve } = require("path");
var path = require("path");
var zlib = require("zlib");
var calc = require('./calc');

calc.sum(20,30);


//for zip
// fs.createReadStream("test.txt").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("text_zip.txt.gz"));
// console.warn("file compressions is done");

//for un-zip

// fs.createReadStream("text_zip.txt.gz").pipe(zlib.createGzip()).pipe(fs.createWriteStream("text_zip.txt"));
// console.warn("file uncompression is done");

// var readStream = fs.createReadStream("dummy.txt");
// var writeStream = fs.createWriteStream("test.txt");

// readStream.pipe(writeStream);

// console.warn("read and write is done");

// var data = "";

// var readStream =  fs.createReadStream("new-demo.txt");

// readStream.setEncoding("utf-8");

// readStream.on('data',function(chunck){
//     data +-chunck;
// });
// readStream.on('error',function(err){
//     console.warn(err);
// });
// readStream.on('end',function(){
//     console.warn(data);
// })


// console.warn('first line');


// var buffer = new Buffer("this is my frist file created in the node file system");
// console.warn(buffer.toString());

// var buffer = new Buffer(26);
// for(var i = 0; i <26; i++){
//     buffer[i] = i + 65;

// }
// console.warn(buffer.toString('ascii',0.10));

// const data = "this is my frist file created in the node file system";

// fs.readdir(__dirname,function(err,files){
//     if(err){
//         console.warn(err);
//     }
//     else{
//         console.warn("files in "+ __dirname);
         
//         files.forEach((file)=>{
//             if(path.extname(file) == ".js"){
//                 console.warn(file);
//             }
//         })
//     }
// })

// fs.readdir(__dirname,function(err,files){
//     if(err){
//         console.warn(err);
//     }
//     else{
//         console.warn("files in "+ __dirname);
//         files.forEach((files)=>{
//             console.warn(files);
//         })
//     }
// })

// fs.stat("new-demo.txt",function(err,data){
//     if(err){
//         console.warn(err);
//     }else{
//         console.warn("start:");
//         console.warn(data.isFile());
//         console.warn(data.isDirectory());
//         console.warn(data);
//     }
// })

// fs.rename("demo.txt","new-demo.txt", function(err,data){
//     if(err){
//         console.warn(err);
//     }
//     else{
//         console.warn("file renamed successfully");
//     }
// })

// fs.unlink("demo1.txt", function(err,data){
//     if(err){
//         console.warn(err);
//     }
//     else{
//         console.warn("file written successfully");
//     }
// })

// fs.open("demo1.txt","w", function(err,data){
//         if(err){
//             console.warn(err);
//         }
//         else{
//             console.warn("file written successfully");
//         }
// })

// fs.appendFile("demo.txt",data, function(err,data){
//         if(err){
//             console.warn(err);
//         }
//         else{
//             console.warn("file written successfully");
//         }
// })

// fs.writeFile("dummy.txt",data, function(err,data){
//         if(err){
//             console.warn(err);
//         }
//         else{
//             console.warn("file written successfully");
//         }
// })

// var data =fs.readFileSync('dummy.txt');
// var data1  = data.toString();
// var arr= data1.split(" ");
// for(i=0;i<arr.length;i++)
// {newdata=arr[i];
//     fs.writeFile("new"+[i]+".txt",newdata,function(err,res){
//     if(err){
//         console.log(err);
//     }
//     console.log("File written successfully")
// })
// }



// var readData = function(fileName){
//     return new Promise((resolve,rejects)=>{
//         fs.readFile(fileName,function(err,data){
//             if(err){
//                 console.warn(err);
//             }
//             resolve(data.toString());
//         })
//     })
// }

// readData("dummy.txt").then((res)=>{
//     console.warn(res);
// }).catch((err)=>{
//     console.warn(err);
// })

//asyn

// fs.readFile("dummy.txt",function(err,data){
//     if(err){
//         console.warn(err);
//     }else{
//         console.warn(data.toString());
//     }
// })

//synchronus


// var data  = fs.readFileSync("dummy.txt");
// console.warn(data.toString());
// var dataf = data.toString().split(" ")
// //console.warn(err);
// for(var i = 0; i<dataf.length;i++){
//     if(dataf[i] == "my"){
//         console.warn('yes');
//         break;
//     }else{
//         console.warn("no");
//     }
// }


//console.warn(dataf);
// if(data.includes('my')){
//     console.warn('yes');
// }else{
//     console.warn('no');
// }

// console.warn('second line');




























//https://github.com/sumitkam/MX_TRAINING_TASK/tree/main/angular_task



// console.warn('first');

// setTimeout(() => {
//     console.warn('second');
// }, 1000);

// console.warn('third');

//callback

// function  printText(text,cb){
//     console.warn(text);
//     cb();
// }

// printText('hii',function(){
//     console.warn('callback');
// })

//prommises

// var promise = new Promise((resolve,reject)=>{
//     const marks = 75;
//     if(marks >= 45){
//         resolve('You are hired')
//     }
//     reject('you are rejected')
// }) ;

// promise.then((res)=>{
//     console.warn(res);
// }).catch((err)=>{
//     console.warn(err);
// })