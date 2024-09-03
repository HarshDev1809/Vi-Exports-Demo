import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const verifyToken = async()=>{
    const token = sessionStorage.getItem("token");
    try{
        const response = await axios.post(`${URL}/token/verify`,{
            Headers : {
                'x-access-token' : token
            }
        })
        return response;
    }catch(err){
        return err.response.data;
    }
}