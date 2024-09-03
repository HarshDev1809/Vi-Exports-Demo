import { useEffect, useState } from "react";
import "./ShoppingBag.css";
import CircularProgress from "@mui/material/CircularProgress";
// import CartItem from "../../../Components/CartItem/CartItem";

function ShoppingBag({ onClose }) {
  // const getCartItems = async () => {
  //   try {
  //     const result = await getCartItemsApi("");
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.shoppingBag.items);
//   const status = useSelector((state) => state.shoppingBag.status);
//   const error = useSelector((state) => state.shoppingBag.error);

  const [itemCount, setItemCount] = useState(1);
  const [item,setItem] = useState([]);

  const showItems = () => {
    console.log("inside show items");
    return (
      <ul className="d-flex flex-column gap-3">
        {items.map((item) => {
          return <li className="d-flex justify-content-center border-bottom p-1">
            <CartItem item={item} />
          </li>;
        })}
      </ul>
    );
  };

//   const displayData = (status) => {
//     switch (status) {
//       case "loading":
//         return <CircularProgress color="secondary" />;
//       case "succeeded":
//         return showItems();
//       case "failed":
//         return <h1>failed</h1>;
//     }
//   };

  useEffect(() => {
    if (status === "idle") {
      console.log("inside if");
      dispatch(getCartItems());
    }
    setItemCount(items.length)
  }, [status, dispatch]);

//   if (status === "loading") {
//     console.log(items);
//     console.log(status);
//     return <></>;
//   }

//   if (status === "failed") {
//     console.log(error);
//     return <></>;
//   }

//   if (status === "succeeded") {
//     console.log(items);
//   }

  return (
    <div className="shopping-bag">
      <div className="header border d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-center border gap-2">
          <h2>Cart</h2>
          <span className="fs-4 text-secondary">{itemCount}</span>
        </div>
        <button
          type="button"
          className="close-btn rounded-circle d-flex justify-content-center align-items-center"
          onClick={onClose(false)}
        >
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      {/* <div className="offer-section">
        <CartOfferCarousel />
      </div> */}
      <div className="items">{displayData(status)}</div>
    </div>
  );
}

export default ShoppingBag;