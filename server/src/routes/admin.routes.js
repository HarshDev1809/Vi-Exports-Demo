const { verifySignIn } = require("../middlwares/auth.middleware");

module.exports = (app)=>{
    app.post("/admin/signup",[verifySignIn]);
    app.post("/admin/signin",)
}