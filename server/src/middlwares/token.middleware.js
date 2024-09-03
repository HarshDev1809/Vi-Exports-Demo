const jwt = require("jsonwebtoken");
const {SECRET} = require("../../configs/auth.config")

const verifyToken = async(req,res,next)=>{
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(400).send({message : "Token not provided"});
    }
    try{
        const {userName} = jwt.verify(token,SECRET);
        console.log(userName);
        req.userName = userName;
        next();
    }catch(err){
        return res.status(401).json({message : "Invalid token!"});
    }
}

module.exports = {
    verifyToken
}