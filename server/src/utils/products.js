const fs = require('fs');
const path = require('path');

const getProducts = ()=>{
    const filePath = path.join(__dirname,"../../../database/products/products.json");
    try{
        const  data = fs.readFileSync(filePath, 'utf8');
        const  products  = JSON.parse(data);
        return products;
    }catch(err){
        return false;
    }
}

const getProductIndex = (productId)=> {
    const products = getProducts();
    const index = products.findIndex((product)=> product["Product ID"] === productId);
    return index
}

const updateProducts = (products) => {
    try {
        const filePath = path.join(__dirname,"../../../database/products/products.json");
        const udpatedData = JSON.stringify(products,null,2);
        fs.writeFileSync(filePath,udpatedData,"utf8");
        return true;
    }catch(err){
        return false;
    }
}

const productById = (productId)=>{
    const products = getProducts();
    const product = products.find((product)=> product["Product ID"]===productId);
    return product;
}

const getAvailableQuantity = (productId, size)=>{
    const product = productById(productId);
    const sizeOptions = product["Size options"];
    const data = sizeOptions.find((option)=> option["size"] === size);
    return data["quantity"];
}

module.exports = {
    getProducts,
    getProductIndex,
    updateProducts,
    productById,
    getAvailableQuantity
}