import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const signInApi = async (userDetails) => {
  try {
    const response = await axios.post(`${URL}/auth/signin`, userDetails);
    return response;
  } catch (err) {
    return err;
  }
};
