// import { useEffect, useState } from "react";
// import "./ShoppingBag.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getCartItems } from "./ShoppingBagSlice";
// import CircularProgress from "@mui/material/CircularProgress";
// import CartItem from "../../../components/CartItem/CartItem";
// import { useNavigate } from "react-router-dom";

// function ShoppingBag({ onClose }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.shoppingBag.items);
//   const status = useSelector((state) => state.shoppingBag.status);
//   const error = useSelector((state) => state.shoppingBag.error);

//   const [itemCount, setItemCount] = useState(1);

//   const showItems = () => {
//     if (!Array.isArray(items) || items.length === 0) {
//       return <p>No items in the cart.</p>;
//     }

//     return (
//       <ul className="d-flex flex-column gap-3">
//         {items.map((item) => (
//           <li key={item.id} className="d-flex justify-content-center border-bottom p-1">
//             <CartItem item={item} />
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

//   const goToCheckout = ()=>{
//     navigate("/checkout");
//   }

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(getCartItems());
//     }
//     setItemCount(Array.isArray(items) ? items.length : 0);
//   }, [status, dispatch, items]);

//   return (
//     <div className="shopping-bag">
//       <div className="header border d-flex justify-content-between align-items-center">
//         <div className="d-flex justify-content-start align-items-center border gap-2">
//           <h2>Cart</h2>
//           <span className="fs-4 text-secondary">{itemCount}</span>
//         </div>
//         <button
//           type="button"
//           className="close-btn rounded-circle d-flex justify-content-center align-items-center"
//           onClick={() => onClose(false)}
//         >
//           <span className="material-symbols-outlined">close</span>
//         </button>
//       </div>
//       <div className="items">{displayData(status)}</div>
//       <button onClick = {goToCheckout}>checkout</button>
//     </div>
//   );
// }

// export default ShoppingBag;

import { useEffect, useState } from "react";
import "./ShoppingBag.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "./ShoppingBagSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CartItem from "../../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";

function ShoppingBag({ onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingBag.items);
  const status = useSelector((state) => state.shoppingBag.status);
  const error = useSelector((state) => state.shoppingBag.error);

  const [itemCount, setItemCount] = useState(1);

  const showItems = () => {
    if (!Array.isArray(items) || items.length === 0) {
      return <p className="text-center text-muted">Your cart is empty.</p>;
    }

    return (
      <ul className="cart-items-list d-flex flex-column gap-3">

        {items.map((item) => {
          return <li key={item.id} className="cart-item border-bottom p-2">
            <CartItem item={item} />
          </li>
  })}
      </ul>
    );
  };

  const displayData = (status) => {
    switch (status) {
      case "loading":
        return (
          <div className="d-flex justify-content-center align-items-center py-5">
            <CircularProgress color="secondary" />
          </div>
        );
      case "succeeded":
        return showItems();
      case "failed":
        return <h1 className="text-center text-danger">Failed to load items</h1>;
      default:
        return null;
    }
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(getCartItems());
    }
    setItemCount(Array.isArray(items) ? items.length : 0);
  }, [status, dispatch, items]);

  return (
    <div className="shopping-bag rounded shadow-lg p-4">
      <div className="header d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <h2 className="m-0">Cart</h2>
          <span className="badge bg-secondary">{itemCount}</span>
        </div>
        <button
          type="button"
          className="close-btn rounded-circle d-flex justify-content-center align-items-center bg-danger text-white"
          onClick={() => onClose(false)}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="items mb-4">{displayData(status)}</div>
      <button
        className="btn btn-primary w-100 py-2"
        onClick={goToCheckout}
        disabled={itemCount === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default ShoppingBag;

