module.exports = (app) =>{

    var product = require("../controller/product.controller");
    var router = require("express").Router();

    router.post("/",product.create);
    router.get("/",product.getProducts);
    router.get("/:id",product.getProduct);
    router.get("/brands/:brand",product.getProductByBrand);
    router.put("/:id",product.updateProduct);
    router.delete("/:id",product.deleteProduct);

    app.use("/products",router);



}


