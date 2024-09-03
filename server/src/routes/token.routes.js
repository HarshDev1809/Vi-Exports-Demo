const { checkToken } = require("../controllers/token.controller")

module.exports = (app)=>{
    app.post("/token/verify",checkToken)
}