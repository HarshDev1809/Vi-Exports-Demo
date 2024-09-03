import { useEffect, useState } from "react";
import UnAuthorized from "../../components/UnAuthorized/UnAuthorized";
import axios from "axios";
const URL = process.env.REACT_APP_URL;

function AuthHOC(props) {
  const [isTrue, setIsTrue] = useState(false);
  const verifyToken = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.post(
        `${URL}/token/verify`,
        {},
        {
          headers: {
            // 'Content-Type': 'application/json',
            // Include your token in headers if needed
            "x-access-token": token,
          },
        }
      );

      // Assuming the response contains an object with a boolean or status indicating success
      if (response.status === 200) {
        return true; // Modify based on your API response structure
      } else {
        // Handle unsuccessful status codes
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  const function1 = async () => {
    const result = await verifyToken();
    setIsTrue(result); // Update the state based on verification result
};

  useEffect(() => {
    function1();  }, []);
  if (!isTrue) {
    return <UnAuthorized />;
  }
  return props.children;
}

export default AuthHOC;
