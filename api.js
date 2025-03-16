const express = require('express');
const { createNewProduct, updateProduct, getAllProducts, deleteProduct, getFilteredProducts, getTotalAmount} = require('./db.js'); ; 

const router = express.Router();

router.post('/products', (req, res) => {
    createNewProduct(req.body["title"], req.body["price"], req.body["type"]);
    res.json({ message: "Product Added!"})
});

router.put('/products/:id', (req, res) => {
    id = req.params["id"]
    req.body["price"]
    updateProduct(id, req.body["title"], req.body["price"], req.body["type"], req.body["selected"]);
    res.json({ message: "Product Updated!"})
});

router.get('/products', (req, res) => {
    if(req.query.filter != undefined){
        console.log("FILTERING")
        products = getFilteredProducts(req.query.filter)
    }else{
        products = getAllProducts(req.query.filter)
    }
    res.json({ data: products})
});

router.get('/cart/total', (req, res) => {
    total = getTotalAmount()
    res.json({ total: total})
});

router.delete('/products/:id', (req, res) => {
    id = req.params["id"]
    products = deleteProduct(id)
    res.json({ message: "Product deleted"})
});


module.exports = router; 
