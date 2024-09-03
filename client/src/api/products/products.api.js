import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const fetchProductById = async (id) => {
    try{
        const response = await axios.get(`${URL}/products/${id}`);
        return response
    }catch(err){
        return err;
    }
}