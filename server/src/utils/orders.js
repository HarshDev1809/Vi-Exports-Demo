const fs = require("fs");
const path = require("path");

const getOrders = ()=>{
    const filePath = path.join(__dirname, "../../../database/orders/orders.json");
    const data = fs.readFileSync(filePath, "utf8");
    const orders = JSON.parse(data);
    return orders;
}

const updateOrders = (orders) => {
    try {
        const filePath = path.join(__dirname, "../../../database/orders/orders.json");
        const updatedData = JSON.stringify(orders, null, 2);
        fs.writeFileSync(filePath, updatedData, "utf8");
        return true;
      } catch (err) {
        return false;
      }
}

module.exports = {
    getOrders,
    updateOrders
}