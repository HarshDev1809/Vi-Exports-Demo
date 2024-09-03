const {getAllUsers,signUp, signIn} = require("../controllers/auth.controller");
const {verifySignUp, verifySignIn} = require("../middlwares/auth.middleware");
const { verifyToken } = require("../middlwares/token.middleware");

module.exports = (app) => {
    app.get("/users",getAllUsers);
    app.post("/auth/signup",[verifySignUp],signUp)
    app.post("/auth/signin",[verifySignIn],signIn)
    app.post("/cart/add",[verifyToken],)
}