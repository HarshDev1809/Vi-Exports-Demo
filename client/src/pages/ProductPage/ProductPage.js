// // import NavBar from "../../components/NavBar/NavBar";
// // import { useDispatch, useSelector } from "react-redux";
// // import { getProductById } from "../../app/features/Items/ItemsSlice";
// // import React, { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { Rating } from "@mui/material";
// // import "./ProductPage.css";
// // import { addCartItem } from "../../app/features/ShoppingBag/ShoppingBagSlice";

// // function ProductPage() {
// //   const { id } = useParams();
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const { selectedItem, status, error } = useSelector((state) => state.items);

// //   const [displayImage, setDisplayImage] = useState();
// //   const [quantity, setQuantity] = useState(1);
// //   const [disableDecreaseBtn, setDisableDecreaseBtn] = useState(false);
// //   const [disableIncreaseBtn, setDisableIncreaseBtn] = useState(false);
// //   const [selectedSize, setSelectedSize] = useState(null);


// //   useEffect(() => {
// //     if (id) {
// //       dispatch(getProductById(id));
// //     }
// //   }, [dispatch, id]);

// //   useEffect(() => {
// //     if (status === "succeeded" && selectedItem) {
// //       setDisplayImage(
// //         selectedItem["Image link"] ? selectedItem["Image link"][0] : null
// //       );
// //     }
// //   }, [status, selectedItem]);

// //   useEffect(() => {
// //     if (quantity <= 1) {
// //       setDisableDecreaseBtn(true);
// //     } else {
// //       setDisableDecreaseBtn(false);
// //     }
// //   }, [quantity]);

// //   const increaseQuantity = () => {
// //     setQuantity(quantity + 1);
// //   };

// //   const decreaseQuantity = () => {
// //     if (quantity > 1) {
// //       setQuantity(quantity - 1);
// //     }
// //   };

// //   const openNextImage = () => {
// //     const imageIndex = selectedItem["Image link"].indexOf(displayImage) + 1;
// //     if (imageIndex >= selectedItem["Image link"].length) {
// //       setDisplayImage(selectedItem["Image link"][0]);
// //     } else {
// //       setDisplayImage(selectedItem["Image link"][imageIndex]);
// //     }
// //   };

// //   const openPreviousImage = () => {
// //     const imageIndex = selectedItem["Image link"].indexOf(displayImage) - 1;
// //     if (imageIndex < 0) {
// //       setDisplayImage(
// //         selectedItem["Image link"][selectedItem["Image link"].length - 1]
// //       );
// //     } else {
// //       setDisplayImage(selectedItem["Image link"][imageIndex]);
// //     }
// //   };

// //   const openImage = (e) => {
// //     setDisplayImage(e.target.src);
// //   };

// //   if (status === "loading") {
// //     return <h1>Loading...</h1>;
// //   }

// //   if (status === "failed") {
// //     return <h1>Error: {error}</h1>;
// //   }

// //   const selectSize = (size) => {
// //     setSelectedSize(size);
// // };

// // const addToCart = ()=>{
// //     const newItem = {
// //         productName : selectedItem["Product name"],
// //         productId : selectedItem["Product ID"],
// //         "size" : selectedSize,
// //         "quantity" : quantity,
// //         productImage : selectedItem["Image link"][0],
// //         productPrice : selectedItem["Product price"]["Selling price"]
// //     }

// //     dispatch(addCartItem(newItem))

// //     console.log(newItem)
// // }

// // const goToCheckout = ()=>{
// //     navigate("/checkout")
// // }

// //   return (
// //     <div className="item-page">
// //       <NavBar />
// //       {status === "succeeded" && selectedItem && (
// //         <>
// //           <div className="page-upper-section">
// //             <div className="image-section h-100 w-50">
// //               <div className="display-image-div border h-75 w-100 p-3">
// //                 <img
// //                   src={displayImage}
// //                   className="h-100 w-100 big-image border border-primary"
// //                   alt="Product"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={openPreviousImage}
// //                   className="h-25 prev-btn opacity-50"
// //                 >
// //                   <span className="material-symbols-rounded">
// //                     arrow_back_ios
// //                   </span>
// //                 </button>
// //                 <button
// //                   type="button"
// //                   onClick={openNextImage}
// //                   className="h-25 next-btn opacity-50"
// //                 >
// //                   <span className="material-symbols-rounded">
// //                     arrow_forward_ios
// //                   </span>
// //                 </button>
// //               </div>
// //               <div className="item-small-images border w-100 d-flex gap-2 px-2">
// //                 {selectedItem["Image link"].map((photo, index) => (
// //                   <img
// //                     key={index}
// //                     src={photo}
// //                     onClick={openImage}
// //                     className="small-images border border-primary"
// //                     alt={`Product thumbnail ${index}`}
// //                   />
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="info-section border h-100 w-50 p-3 gap-3 d-flex flex-column">
// //               <div>
// //                 <h1>{selectedItem["Product name"]}</h1>
// //               </div>
// //               <div>
// //                 <Rating
// //                   name="half-rating-read"
// //                   value={selectedItem["Product rating"]}
// //                   precision={0.5}
// //                   readOnly
// //                 />
// //               </div>
// //               <div className="d-flex gap-2">
// //                 <span>
// //                   <del>{selectedItem["Product price"]["Orginal price"]}</del>
// //                 </span>
// //                 <span>{selectedItem["Product price"]["Selling price"]}</span>
// //                 <span>Tax included. Shipping calculated at checkout.</span>
// //               </div>
// //               <div className="border d-flex gap-5">
// //               {selectedItem["Size options"].map((option) => {
// //                     const isSelected = selectedSize === option.size;
// //                     return (
// //                         <div
// //                             key={option.size}
// //                             className={`size-option border ${isSelected ? 'selected' : ''}`}
// //                             onClick={() => selectSize(option.size)}
// //                         >
// //                             {option.size}
// //                         </div>
// //                     );
// //                 })}
// //               </div>
// //               <div className="border d-flex w-25">
// //                 <button
// //                   type="button"
// //                   className="w-25"
// //                   disabled={disableDecreaseBtn}
// //                   onClick={decreaseQuantity}
// //                 >
// //                   -
// //                 </button>
// //                 <input
// //                   type="number"
// //                   className="w-50 text-center"
// //                   value={quantity}
// //                   readOnly
// //                 />
// //                 <button
// //                   type="button"
// //                   className="w-25"
// //                   disabled={disableIncreaseBtn}
// //                   onClick={increaseQuantity}
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //               <div className="border border-primary d-flex flex-column gap-2 py-3">
// //                 <button type="button" onClick={addToCart}>
// //                   Add to Shopping Bag
// //                   <span className="material-symbols-outlined">
// //                     shopping_bag
// //                   </span>
// //                 </button>
// //                 <button type="button" onClick={goToCheckout}>Check Out</button>
// //               </div>
// //               <div className="border d-flex gap-1">
// //                 <span className="material-symbols-outlined">
// //                   local_shipping
// //                 </span>
// //                 <span>Delivered in 2-5 Days</span>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="page-lower-section">
// //             <div className="description-section">
// //               <h3>Product Details</h3>
// //               <h4>{selectedItem["Product name"]}</h4>
// //               <p>{selectedItem["Product description"]}</p>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default ProductPage;


// import NavBar from "../../components/NavBar/NavBar";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductById } from "../../app/features/Items/ItemsSlice";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Rating } from "@mui/material";
// import "./ProductPage.css";
// import { addCartItem } from "../../app/features/ShoppingBag/ShoppingBagSlice";

// function ProductPage() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { selectedItem, status, error } = useSelector((state) => state.items);

//   const [displayImage, setDisplayImage] = useState();
//   const [quantity, setQuantity] = useState(1);
//   const [disableDecreaseBtn, setDisableDecreaseBtn] = useState(false);
//   const [selectedSize, setSelectedSize] = useState(null);

//   useEffect(() => {
//     if (id) {
//       dispatch(getProductById(id));
//     }
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (status === "succeeded" && selectedItem) {
//       setDisplayImage(
//         selectedItem["Image link"] ? selectedItem["Image link"][0] : null
//       );
//     }
//   }, [status, selectedItem]);

//   useEffect(() => {
//     if (quantity <= 1) {
//       setDisableDecreaseBtn(true);
//     } else {
//       setDisableDecreaseBtn(false);
//     }
//   }, [quantity]);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const openNextImage = () => {
//     const imageIndex = selectedItem["Image link"].indexOf(displayImage) + 1;
//     if (imageIndex >= selectedItem["Image link"].length) {
//       setDisplayImage(selectedItem["Image link"][0]);
//     } else {
//       setDisplayImage(selectedItem["Image link"][imageIndex]);
//     }
//   };

//   const openPreviousImage = () => {
//     const imageIndex = selectedItem["Image link"].indexOf(displayImage) - 1;
//     if (imageIndex < 0) {
//       setDisplayImage(
//         selectedItem["Image link"][selectedItem["Image link"].length - 1]
//       );
//     } else {
//       setDisplayImage(selectedItem["Image link"][imageIndex]);
//     }
//   };

//   const openImage = (e) => {
//     setDisplayImage(e.target.src);
//   };

//   const selectSize = (size) => {
//     setSelectedSize(size);
//   };

//   const addToCart = () => {
//     const newItem = {
//       productName: selectedItem["Product name"],
//       productId: selectedItem["Product ID"],
//       size: selectedSize,
//       quantity: quantity,
//       productImage: selectedItem["Image link"][0],
//       productPrice: selectedItem["Product price"]["Selling price"],
//     };

//     dispatch(addCartItem(newItem));
//     console.log(newItem);
//   };

//   const goToCheckout = () => {
//     navigate("/checkout");
//   };

//   if (status === "loading") {
//     return <div className="loading-container"><h1>Loading...</h1></div>;
//   }

//   if (status === "failed") {
//     return <div className="error-container"><h1>Error: {error}</h1></div>;
//   }

//   return (
//     <div className="item-page">
//       <NavBar />
//       {status === "succeeded" && selectedItem && (
//         <>
//           <div className="page-upper-section d-flex flex-column flex-md-row gap-4 p-4">
//             <div className="image-section w-100">
//               <div className="display-image-div border h-100 p-3 rounded">
//                 <img
//                   src={displayImage}
//                   className="h-100 w-100 big-image rounded"
//                   alt="Product"
//                 />
//                 <button
//                   type="button"
//                   onClick={openPreviousImage}
//                   className="prev-btn opacity-50"
//                 >
//                   <span className="material-symbols-rounded">
//                     arrow_back_ios
//                   </span>
//                 </button>
//                 <button
//                   type="button"
//                   onClick={openNextImage}
//                   className="next-btn opacity-50"
//                 >
//                   <span className="material-symbols-rounded">
//                     arrow_forward_ios
//                   </span>
//                 </button>
//               </div>
//               <div className="item-small-images d-flex gap-2 mt-3">
//                 {selectedItem["Image link"].map((photo, index) => (
//                   <img
//                     key={index}
//                     src={photo}
//                     onClick={openImage}
//                     className={`small-images border ${displayImage === photo ? 'active' : ''}`}
//                     alt={`Product thumbnail ${index}`}
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="info-section w-100 d-flex flex-column justify-content-between">
//               <div>
//                 <h1>{selectedItem["Product name"]}</h1>
//                 <Rating
//                   name="half-rating-read"
//                   value={selectedItem["Product rating"]}
//                   precision={0.5}
//                   readOnly
//                 />
//                 <div className="d-flex gap-2 mt-3">
//                   <span>
//                     <del className="text-muted">{selectedItem["Product price"]["Orginal price"]}</del>
//                   </span>
//                   <span className="fs-5 fw-bold">{selectedItem["Product price"]["Selling price"]}</span>
//                   <span className="text-muted">Tax included. Shipping calculated at checkout.</span>
//                 </div>
//                 <div className="size-selection mt-4">
//                   <h5>Select Size:</h5>
//                   <div className="d-flex gap-2 mt-2">
//                     {selectedItem["Size options"].map((option) => {
//                       const isSelected = selectedSize === option.size;
//                       return (
//                         <div
//                           key={option.size}
//                           className={`size-option ${isSelected ? 'selected' : ''}`}
//                           onClick={() => selectSize(option.size)}
//                         >
//                           {option.size}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//                 <div className="quantity-selection d-flex mt-4">
//                   <button
//                     type="button"
//                     className="quantity-btn"
//                     disabled={disableDecreaseBtn}
//                     onClick={decreaseQuantity}
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     className="quantity-input"
//                     value={quantity}
//                     readOnly
//                   />
//                   <button
//                     type="button"
//                     className="quantity-btn"
//                     disabled={disableIncreaseBtn}
//                     onClick={increaseQuantity}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div className="action-buttons mt-4">
//                 <button type="button" className="add-to-cart-btn" onClick={addToCart}>
//                   Add to Shopping Bag
//                   <span className="material-symbols-outlined">
//                     shopping_bag
//                   </span>
//                 </button>
//                 <button type="button" className="checkout-btn" onClick={goToCheckout}>
//                   Check Out
//                 </button>
//               </div>
//               <div className="shipping-info mt-3">
//                 <span className="material-symbols-outlined">
//                   local_shipping
//                 </span>
//                 <span>Delivered in 2-5 Days</span>
//               </div>
//             </div>
//           </div>
//           <div className="page-lower-section p-4">
//             <div className="description-section">
//               <h3>Product Details</h3>
//               <h4>{selectedItem["Product name"]}</h4>
//               <p>{selectedItem["Product description"]}</p>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default ProductPage;


import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../app/features/Items/ItemsSlice";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import "./ProductPage.css";
import { addCartItem } from "../../app/features/ShoppingBag/ShoppingBagSlice";
import BottomBar from "../../components/BottomBar/BottomBar";
import FooterBar from "../../components/FooterBar/FooterBar";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedItem, status, error } = useSelector((state) => state.items);

  const [displayImage, setDisplayImage] = useState();
  const [quantity, setQuantity] = useState(1);
  const [disableDecreaseBtn, setDisableDecreaseBtn] = useState(false);
  const [disableIncreaseBtn, setDisableIncreaseBtn] = useState(false); // Added this state
  const [selectedSize, setSelectedSize] = useState("S");

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (status === "succeeded" && selectedItem) {
      setDisplayImage(
        selectedItem["Image link"] ? selectedItem["Image link"][0] : null
      );
    }
  }, [status, selectedItem]);

  useEffect(() => {
    if (quantity <= 1) {
      setDisableDecreaseBtn(true);
    } else {
      setDisableDecreaseBtn(false);
    }

    // Disable the increase button if the quantity is at a maximum limit, e.g., 10
    if (quantity >= 10) {
      setDisableIncreaseBtn(true);
    } else {
      setDisableIncreaseBtn(false);
    }
  }, [quantity]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const openNextImage = () => {
    const imageIndex = selectedItem["Image link"].indexOf(displayImage) + 1;
    if (imageIndex >= selectedItem["Image link"].length) {
      setDisplayImage(selectedItem["Image link"][0]);
    } else {
      setDisplayImage(selectedItem["Image link"][imageIndex]);
    }
  };

  const openPreviousImage = () => {
    const imageIndex = selectedItem["Image link"].indexOf(displayImage) - 1;
    if (imageIndex < 0) {
      setDisplayImage(
        selectedItem["Image link"][selectedItem["Image link"].length - 1]
      );
    } else {
      setDisplayImage(selectedItem["Image link"][imageIndex]);
    }
  };

  const openImage = (e) => {
    setDisplayImage(e.target.src);
  };

  const selectSize = (size) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    try{
      const newItem = {
        productName: selectedItem["Product name"],
        productId: selectedItem["Product ID"],
        size: selectedSize,
        quantity: quantity,
        productImage: selectedItem["Image link"][0],
        productPrice: selectedItem["Product price"]["Selling price"],
      };
  
      dispatch(addCartItem(newItem));
    }catch(err){
      console.log(err);
    }
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  if (status === "loading") {
    return <div className="loading-container"><h1>Loading...</h1></div>;
  }

  if (status === "failed") {
    return <div className="error-container"><h1>Error: {error}</h1></div>;
  }

  // const goToCart = ()=>{
  //   console.log("clicked");
  // }

  return (
    <div className="item-page">
      <NavBar />
      {status === "succeeded" && selectedItem && (
        <>
          <div className="page-upper-section d-flex flex-column flex-md-row gap-4 p-4">
            <div className="image-section w-100">
              <div className="display-image-div border h-100 p-3 rounded">
                <img
                  src={displayImage}
                  className="h-100 w-100 big-image rounded"
                  alt="Product"
                />
                <button
                  type="button"
                  onClick={openPreviousImage}
                  className="prev-btn opacity-50"
                >
                  <span className="material-symbols-rounded">
                    arrow_back_ios
                  </span>
                </button>
                <button
                  type="button"
                  onClick={openNextImage}
                  className="next-btn opacity-50"
                >
                  <span className="material-symbols-rounded">
                    arrow_forward_ios
                  </span>
                </button>
              </div>
              <div className="item-small-images d-flex gap-2 justify-content-center">
                {selectedItem["Image link"].map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    onClick={openImage}
                    className={`small-images border ${displayImage === photo ? 'active' : ''}`}
                    alt={`Product thumbnail ${index}`}
                  />
                ))}
              </div>
            </div>
            <div className="info-section w-100 d-flex flex-column justify-content-between">
              <div>
                <h1>{selectedItem["Product name"]}</h1>
                <Rating
                  name="half-rating-read"
                  value={selectedItem["Product rating"]}
                  precision={0.5}
                  readOnly
                />
                <div className="d-flex gap-2 mt-3">
                  <span>
                    <del className="text-muted">Rs. {selectedItem["Product price"]["Orginal price"]}</del>
                  </span>
                  <span className="fs-5 fw-bold">Rs. {selectedItem["Product price"]["Selling price"]}</span>
                  <span className="text-muted">Tax included. Shipping calculated at checkout.</span>
                </div>
                <div className="size-selection mt-4">
                  <h5>Select Size:</h5>
                  <div className="d-flex gap-2 mt-2">
                    {selectedItem["Size options"].map((option) => {
                      const isSelected = selectedSize === option.size;
                      return (
                        <div
                          key={option.size}
                          className={`size-option ${isSelected ? 'selected' : ''}`}
                          onClick={() => selectSize(option.size)}
                        >
                          {option.size}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="quantity-selection d-flex mt-4">
                  <button
                    type="button"
                    className="quantity-btn"
                    disabled={disableDecreaseBtn}
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="quantity-input"
                    value={quantity}
                    readOnly
                  />
                  <button
                    type="button"
                    className="quantity-btn"
                    disabled={disableIncreaseBtn} // Use disableIncreaseBtn here
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="action-buttons mt-4">
                <button type="button" className="add-to-cart-btn" onClick={addToCart}>
                  Add to Shopping Bag
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                </button>
                {/* <button type="button" className="" onClick={goToCart}>
                  Go To Cart
                <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                </button> */}
                <button type="button" className="checkout-btn" onClick={goToCheckout}>
                  Check Out
                </button>
              </div>
              <div className="shipping-info mt-3">
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
                <span>Delivered in 2-5 Days</span>
              </div>
            </div>
          </div>
          <div className="page-lower-section p-4">
            <div className="description-section">
              <h3>Product Details</h3>
              <h4>{selectedItem["Product name"]}</h4>
              <p>{selectedItem["Product description"]}</p>
            </div>
          </div>
        </>
      )}
      <FooterBar />
    </div>
  );
}

export default ProductPage;
