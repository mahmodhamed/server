const Product = require('./product-model.js');

productsDB = []
lastId = 0

function createNewProduct(title, price, type){
    let product = new Product(lastId, title, price, type)
    lastId++
    productsDB.push(product)
}

function getAllProducts(){
    return productsDB.sort((a, b) => a.id - b.id)
}

function deleteProduct(id){
    product = productsDB.filter((product) => product.id==0)
    const index = productsDB.findIndex((product) => product.id === id);
    if (index !== -1) {
        productsDB.splice(index, 1);
    }
}

function getFilteredProducts(filter){
    products = productsDB.filter((product) => product.type==filter).sort((a, b) => a.id - b.id)
    console.log(products)
    return products
}

function getTotalAmount(){
    let counter = 0
    let selected = productsDB.filter((product) => product.selected==true)
    selected.forEach((item) => counter += item.price)
    return counter
}
function updateProduct(id, title, price, type, selected){
    product = productsDB.filter((product) => product.id==id)[0]
    const index = productsDB.findIndex((product) => product.id == id);
    if (index !== -1) {
        productsDB.splice(index, 1);
    }
    product.title = title
    product.price = price
    product.type = type
    product.selected = selected
    productsDB.push(product)
}

module.exports = { createNewProduct, updateProduct, getAllProducts, deleteProduct ,getFilteredProducts, getTotalAmount};