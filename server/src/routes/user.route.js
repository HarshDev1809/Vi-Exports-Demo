const { getUserInfo } = require("../controllers/user.controller")
const { verifyToken } = require("../middlwares/token.middleware")

module.exports = (app)=>{
    app.get("/user/info",[verifyToken],getUserInfo)
}