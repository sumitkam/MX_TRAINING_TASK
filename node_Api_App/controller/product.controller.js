const { product } = require("../model/index");
var db = require("../model/index");
var Product = db.product;

exports.create = (req,res) =>{
    if(!req.body.name){
        res.status(400).send({message:"Name cannot be empty"});
    } else if(!req.body.brand){
        res.status(400).send({message:"Brand cannot be empty"});
    } else if(!req.body.model){
        res.status(400).send({message:"Model cannot be empty"});
    } else if(!req.body.price){
        res.status(400).send({message:"Price cannot be empty"});
    } else if(!req.body.quantity){
        res.status(400).send({message:"Quantity cannot be empty"});
    }  else {
       // res.status(200).send({message:"request send successfully"});
       let product = new Product({
           name:req.body.name,
           brand:req.body.brand,
           model:req.body.model,
           price:req.body.price,
           quantity:req.body.quantity,
       });
       product.save(product).then((data)=>{
        res.send({data: data,message:"Saved successfully"});
       }).catch((err)=>{
        res.status(400).send({message:"Error",err:err})
       })
    }
}

exports.getProducts = (req,res)=>{
    product.find().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.status(400).send({error:err});
    })
}

exports.getProduct = (req,res) =>{
    let id =req.params.id;
    product.findById(id).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })

    
}

exports.getProductByBrand = (req,res)=>{
    let brand = req.params.brand;
    product.find({brand:brand}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.status(400).send(err);
    })
}

exports.updateProduct = (req,res)=>{
   
        let id = req.params.id;
       product.findByIdAndUpdate(id,req.body,{useFindAndModify :false}).then((data)=>{
               res.send(data);
           }).catch((err)=>{
               res.status(400).send(err);
           })


}

exports.deleteProduct = (req,res) =>{
    let id = req.params.id;
    product.findByIdAndRemove(id,{useFindAndModify :false}).then((data)=>{
        res.json({"message":"deleted",data:data});
    }).catch((err)=>{
        res.status(400).send(err);
    })
}


