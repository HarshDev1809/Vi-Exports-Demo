import { useEffect, useState } from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

function Item({ item }) {

  console.log(item)
  
  const [inCart, setInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate()

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  };

  const descreaseQuantity = () => {
    const newQuantity = quantity -1
    if (newQuantity <= 0) {
      setInCart(false);
    } else {
      setQuantity(newQuantity);
    }
  };

  const increaseQuantity = () => {
    const newQuantity = quantity +1
    setQuantity(newQuantity);
  };

  const handleQuantityChange = (e) => {
    if (e.target.value === 0) {
      setInCart(false);
    } else {
      setQuantity(e.target.value);
    }
  };

  const addToCart = () => {
    setInCart(true);
    const itemDetail = {
      "Name" : item["Product ame"],
      "Product ID" : item["Product ID"]
    }
  };

  const openItem = ()=>{
    const id = item["Product ID"];
    navigate(`/product/${id}`);
  }

  return (
    <div className="item w-100 h-100 border" onClick={openItem}>
      <div className="picture d-flex justify-content-center">
        <img src={item["Image link"][0]} />
      </div>
      {/* <div className="like-button">
        <button type="button" onClick={toggleFavorite} className="d-flex justify-content-center align-items-center border">
          <span className={isFavorite ? "material-symbols-outlined liked" : "material-symbols-outlined"}>favorite</span>
        </button>
      </div> */}
      <div className="name d-flex justify-content-center">
        <span>{item["Product name"]}</span>
      </div>
      <div className="price d-flex justify-content-center align-items-center gap-2 ">
        <span>
          <del>{`Rs. ${item["Product price"]["Orginal price"]}`}</del>
        </span>
        <span>Rs. {item["Product price"]["Selling price"]}</span>
      </div>
      {/* <div className="add-to-cart-button border">
        {inCart ? (
          <div className="h-100">
            <button type="button" onClick={descreaseQuantity} className="h-100 w-25">
          
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="h-100 w-50 text-center"
            ></input>
            <button type="button" onClick={increaseQuantity} className="h-100 w-25">
    
              +
            </button>
          </div>
        ) : (
          <button type="button" className="w-100 h-100" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div> */}
    </div>
  );
}

export default Item;