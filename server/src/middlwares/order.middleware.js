const fs = require("fs");
const path = require("path");
const { getCartItemsByUsername } = require("../utils/cart");
const { productById, getAvailableQuantity } = require("../utils/products");

const verifyOrder = (req,res,next)=>{
    const {userName} = req;
    const cartItems = getCartItemsByUsername(userName);
    if(cartItems.length === 0){
        return res.status(400).send({message: "Please add items in cart!"});
    }
    for(let i = 0; i <cartItems.length; i++){
        const item = cartItems[i];
        // const product = productById(item["Product ID"])
        const maximumQuantity = getAvailableQuantity(item["Product ID"],item["Size"]);
        if(item["Quantity"] > maximumQuantity){
            return res.status(400).send({message : "Product out of stock!"});
        }
    }

    next()
}

module.exports = {
    verifyOrder
}