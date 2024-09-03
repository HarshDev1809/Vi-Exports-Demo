// import NavBar from "../../components/NavBar/NavBar";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getCartItems } from "../../app/features/ShoppingBag/ShoppingBagSlice";
// import CircularProgress from "@mui/material/CircularProgress";
// import "./CheckoutPage.css"

// function CheckoutPage() {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.shoppingBag.items);
//   const status = useSelector((state) => state.shoppingBag.status);
//   const error = useSelector((state) => state.shoppingBag.error);

//   const showItems = () => {
//     if (!Array.isArray(items) || items.length === 0) {
//       return <p>No items in the cart.</p>;
//     }

//     return (
//       <ul className="d-flex flex-column gap-3">
//         {items.map((item) => (
//           <li
//             key={item.id}
//             className="d-flex justify-content-between border-bottom p-1"
//           >
//             <h6>{item["Product name"]}</h6>
//             <p>{item["Size"]}</p>
//             <p>{item["Quantity"]}</p>
//             <p>Rs. {item["Quantity"] * item["Product price"]}</p>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const displayData = (status) => {
//     switch (status) {
//       case "loading":
//         return <CircularProgress color="secondary" />;
//       case "succeeded":
//         return showItems();
//       case "failed":
//         return <h1>Failed to load items</h1>;
//       default:
//         return null;
//     }
//   };

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(getCartItems());
//     }
//   }, [status, dispatch, items]);

//   return (
//     <div>
//       <NavBar />
//       <div className="page-section">
//         <div>
//           <h3>Order details</h3>
//           {displayData(status)}
//         </div>
//         <div className="address-section">
//           <h3>Address</h3>
//           <div className="d-flex">
//           <label>Delivery to : </label>
//           <input disabled={true} placeholder="93, Sector-4, Vaishali, Ghaziabad, Uttar Pradesh, 201010" />
//           </div>

//         </div>
//         <div className="payment-section">
//             <h3>Payment Mode</h3>
//             <h6>Select Payment option: </h6>
//         <div className="d-flex">
//             <input type="radio" placeholder="Cash on Delivery" value="Cash on Delivery" />
//             <label>Cash on Delivery</label></div>
//         </div>
//         <button>place order</button>
//       </div>
//     </div>
//   );
// }

// export default CheckoutPage;


import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "../../app/features/ShoppingBag/ShoppingBagSlice";
import CircularProgress from "@mui/material/CircularProgress";
import "./CheckoutPage.css";
import { useNavigate } from "react-router-dom";
import PlaceOrder from "../../components/PlaceOrder/PlaceOrder";

function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.shoppingBag.items);
  const status = useSelector((state) => state.shoppingBag.status);
  const error = useSelector((state) => state.shoppingBag.error);

  const showItems = () => {
    if (!Array.isArray(items) || items.length === 0) {
      return <p>No items in the cart.</p>;
    }

    return (
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className="item-list__item">
            <div className="item-details">
              <h6 className="item-name">{item["Product name"]}</h6>
              <p className="item-size">Size: {item["Size"]}</p>
              <p className="item-quantity">Qty: {item["Quantity"]}</p>
            </div>
            <p className="item-price">Rs. {item["Quantity"] * item["Product price"]}</p>
          </li>
        ))}
      </ul>
    );
  };

  const displayData = (status) => {
    switch (status) {
      case "loading":
        return (
          <div className="loader">
            <CircularProgress color="secondary" />
          </div>
        );
      case "succeeded":
        return showItems();
      case "failed":
        return <h1>Failed to load items</h1>;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(getCartItems());
    }
  }, [status, dispatch]);

  const checkout = ()=>{
    // const 
    navigate("/placeorder")
  }

  return (
    <div>
      <NavBar />
      <div className="checkout-page">
        <div className="order-section">
          <h3>Order Details</h3>
          {displayData(status)}
        </div>
        <div className="address-section">
          <h3>Delivery Address</h3>
          <div className="address-details">
            <label htmlFor="address">Deliver to:</label>
            <input
              id="address"
              disabled={true}
              value="93, Sector-4, Vaishali, Ghaziabad, Uttar Pradesh, 201010"
            />
          </div>
        </div>
        <div className="payment-section">
          <h3>Payment Mode</h3>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" value="Cash on Delivery" />
              Cash on Delivery
            </label>
          </div>
        </div>
        <PlaceOrder />
      </div>
    </div>
  );
}

export default CheckoutPage;
