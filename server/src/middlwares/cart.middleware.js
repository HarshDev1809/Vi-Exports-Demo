const fs = require("fs");
const path = require("path");
const { getUserByUserName } = require("../utils/users");
const { waitForDebugger } = require("inspector");
const { productById, getAvailableQuantity } = require("../utils/products");

const verifyCartItems = async (req, res, next) => {
  const { productId,size ,quantity } = req.body;

  if (!productId) {
    return res.status(400).send({ message: "Product ID not provided!" });
  }

  if(!size){
    return res.status(400).send({message: "Product size not provided!"});
  }

  if (!quantity || quantity <= 0 ||  quantity > getAvailableQuantity(productId,size)) {
    return res.status(400).send({ message: "Invalid quantity provided!" });
  }


//   const user = getUserByUserName(userName);
//   console.log(userName)

//   const cart = user["Cart"];
//   console.log(cart)
//   const cartItemIndex = cart.findIndex(
//     (item) => item["Product ID"] === productId
//   );

//   if (cartItemIndex === -1) {
//     req.user = user;
//     next();
//   }

// chandan
// loong, eliaichi box
// rose water
// ghee box
// dry fruit box 
// chandi ka bail patra
// vertical compartment box


//   return res.status(400).send({ message: "Item already in cart!" });

next()

};

module.exports = {
    verifyCartItems
}
