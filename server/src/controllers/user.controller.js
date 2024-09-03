const { getUserByUserName } = require("../utils/users");

exports.updateUserInfo = (req,res)=>{
    
}

exports.getUserInfo = (req,res)=>{
    const {userName} = req;
    try{
        const user = getUserByUserName(userName);
        const response = {
            "First name" : user["First name"],
            "Last name" : user["Last name"],
            "Email ID" : user["Email ID"],
            "Phone number" : user["Phone number"],
            "Cart" : user["Cart"],
            "Favorite" : user["Favorite"],
            "Address" : user["Address"],
            "Username" : user["Username"],
            "User ID" : user["User ID"],
            "Orders" : user["Order History"]
        }
        return res.status(200).json(response)
    }catch(err){
        return res.status(500).send(err);
    }
}