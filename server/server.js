const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors')
require("dotenv").config();

app.use(cors())

app.use(bodyParser.json());
require("./src/routes/products.routes")(app);
require("./src/routes/auth.routes")(app)
require("./src/routes/cart.routes")(app)
require("./src/routes/order.routes")(app)
require("./src/routes/token.routes")(app)
require("./src/routes/user.route")(app);

app.listen(8000,()=>{
    console.log("Server Online");
})