// const fs = require("fs");
// const path = require("path");
// const { getUsers, getUserIndex } = require("../utils/users");
// const { getOrders } = require("../utils/orders");
// const { getProducts } = require("../utils/products");

// exports.placeOrder = (req,res)=>{
//     const {userName} = req;
//     const {paymentMode} = req.body;
//     const users = getUsers();
//     const userIndex = getUserIndex(userName);
//     const user = users(userIndex);
//     const orders = getOrders();
//     const today = new Date();
//     const formattedDate = today.toLocaleDateString();
//     const futureDate = new Date(today);
//     futureDate.setDate(today.getDate() + 4);
//     const futureFormattedData = futureDate.toLocaleDateString();

//     const products = getProducts();


//     try{
//         const newOrder = {
//             "Order ID" : Date.now(),
//             "User" : {
//                 "User ID" : user["User ID"],
//                 "Username" : userName,
//                 "Email ID" : user["Email ID"],
//                 "Phone number" : user["Phone number"],
//                 "Name" : user["First name"] + " " + user["Last name"]
//             },
//             "Products" : user["Cart"],
//             "Delivered to": user["Address"],
//             "Status" : "placed",
//             "Placed on" : formattedDate,
//             "Expected delivery date" : futureFormattedData,
//             "Delivered on" : "",
//             "Total amount" : "",
//             "Payment mode" : paymentMode
//         }
//         orders.push(newOrder);
//         user["Order history"].push(newOrder);

//     }catch(err){
//         return res.status(500).send({message : "Order unsuccessful!"});
//     }

// }

const fs = require("fs");
const path = require("path");
const { getUsers, getUserIndex, updateUsers } = require("../utils/users");
const { getOrders, updateOrders } = require("../utils/orders");
const { getProducts, updateProducts,  } = require("../utils/products");

exports.placeOrder = (req, res) => {
    console.log("placing")
    const { userName } = req;
    const paymentMode  = "Cash on Delivery";

    // Retrieve users, orders, and products
    const users = getUsers();
    const userIndex = getUserIndex(userName);
    const user = users[userIndex];
    const orders = getOrders();
    const products = getProducts();

    // Get current and future dates
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 4);
    const futureFormattedDate = futureDate.toLocaleDateString();

    try {
        // Calculate total amount and update product quantities
        let totalAmount = 0;
        for (let cartItem of user["Cart"]) {
            console.log(cartItem)
            
            const product = products.find(p => p["Product ID"] === cartItem["Product ID"]);
            const options = product["Size options"].find((option)=> option["size"] === cartItem["Size"]);
            if (product && options["quantity"] >= cartItem["Quantity"]) {
                totalAmount += product["Price"] * cartItem["Quantity"];
                options["quantity"] -= cartItem["Quantity"];
            } else {
                return res.status(400).send({ message: `Product ${cartItem["Product ID"]} is out of stock or not enough quantity available!` });
            }
        }

        // Create new order
        const newOrder = {
            "Order ID": Date.now(),
            "User": {
                "User ID": user["User ID"],
                "Username": userName,
                "Email ID": user["Email ID"],
                "Phone number": user["Phone number"],
                "Name": user["First name"] + " " + user["Last name"]
            },
            "Products": user["Cart"],
            "Delivered to": user["Address"],
            "Status": "placed",
            "Placed on": formattedDate,
            "Expected delivery date": futureFormattedDate,
            "Delivered on": "",
            "Total amount": totalAmount,
            "Payment mode": paymentMode
        };

        // Add the order to orders and user's order history
        orders.push(newOrder);
        
        user["Order History"].push(newOrder);
        user["Cart"] = []

        // Save updated data to files
        updateUsers(users);
        updateOrders(orders);
        updateProducts(products);

        return res.status(200).send({ message: "Order placed successfully!" });
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: "Order unsuccessful!" });
    }
};

exports.getAllOrders = (req,res)=>{
    const orders = getOrders();
    return res.status(200).send(orders);
}
