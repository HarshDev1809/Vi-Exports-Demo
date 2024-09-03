// import { useEffect, useState } from "react";
// import NavBar from "../../components/NavBar/NavBar";
// import axios from "axios";
// import { FaceLoader } from "@moj-ui/fun-ui";
// const URL = process.env.REACT_APP_URL;

// function OrderPage() {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(true);
//   const getUserInfo = async () => {
//     try {
//       const response = await axios.get(`${URL}/user/info`, {
//         headers: {
//           "x-access-token": sessionStorage.getItem("token"),
//         },
//       });
//       console.log(response);
//       return response;
//     } catch (err) {
//       console.log(err);
//       return err;
//     }
//   };

//   const fetchInfo = async () => {
//     setLoading(true);
//     const response = await getUserInfo();
//     if (response && response.data) {
//       setData(response.data);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const showOrders = () => {
//     console.log(data["First name"]);
//     return (
//       <ul>
//         {data["Orders"].map((order) => {
//           return (
//             <li>
//                 <h6>Order ID : {order["Order ID"]}</h6>
//                 <div>
//                     items : 
//                     {
//                         order["Products"].map((product)=>{
//                             return <div>
//                                 <img src={product["Product image"]}/>
//                                 <p>{product["Product name"]}</p>
//                                 <p>Size : {product["Size"]}</p>
//                                 <p>Quantity : {product["Quantity"]}</p>
//                                 </div>
//                         })
//                     }
//                 </div>
//                 <div>Delived to : {order["Delivered to"]["Name"]}</div>
//                 <div>Expected Delivery : {order["Expected delivery date"]}</div>
//                 <div>Order placed on : {order["Placed on"]}
//                 </div>
//                 <div>Status : {order["Status"]}</div>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   };

//   return (
//     <div className="order-page">
//       <NavBar />
//       {loading ? (
//         <FaceLoader />
//       ) : (
//         <div>
//           <h1>Orders</h1>
//           {showOrders()}
//         </div>
//       )}
//     </div>
//   );
// }

// export default OrderPage;


import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import { FaceLoader } from "@moj-ui/fun-ui";
import "./OrderPage.css"
import Footer from "../../components/FooterBar/FooterBar";
const URL = process.env.REACT_APP_URL;


function OrderPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getUserInfo = async () => {
    try {
      const response = await axios.get(`${URL}/user/info`, {
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
        },
      });
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const fetchInfo = async () => {
    setLoading(true);
    const response = await getUserInfo();
    if (response && response.data) {
      setData(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const showOrders = () => {
    if (!data["Orders"] || data["Orders"].length === 0) {
      return <p>No orders found.</p>;
    }
    
    return (
      <ul className="order-list">
        {data["Orders"].map((order) => (
          <li key={order["Order ID"]} className="order-item">
            <h6>Order ID: {order["Order ID"]}</h6>
            <div className="order-products">
              <strong>Items:</strong>
              {order["Products"].map((product, index) => (
                <div key={index} className="product-item">
                  <img
                    src={product["Product image"]}
                    alt={product["Product name"]}
                    className="product-image"
                  />
                  <div className="product-details">
                    <p><b>{product["Product name"]}</b></p>
                    <p><b>Size: </b>{product["Size"]}</p>
                    <p><b>Quantity: </b>{product["Quantity"]}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-info">
              <p><b>Delivered to:</b> {order["Delivered to"]["Name"]}</p>
              <p><b>Expected Delivery:</b> {order["Expected delivery date"]}</p>
              <p><b>Order placed on:</b> {order["Placed on"]}</p>
              <p><b>Status:</b> {order["Status"]}</p>
              <p><b>Mode of Payment:</b> {order["Payment mode"]}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="order-page">
      <NavBar />
      {loading ? (
        <FaceLoader />
      ) : (
        <div className="order-content">
          <h1>Orders</h1>
          {showOrders()}
        </div>
      )}
    <Footer />
    </div>
  );
}

export default OrderPage;
