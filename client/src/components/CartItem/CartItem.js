import React, { useEffect, useState } from "react";
import "./CartItem.css";
import { fetchProductById } from "../../api/products/products.api";

function CartItem({ item, updateItemQuantity }) {
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState(item["Quantity"]);

    const myFunction = async () => {
        const response = await fetchProductById(item["Product ID"]);
        setProduct(response.data);
    };

    useEffect(() => {
        myFunction();
    }, []);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            updateItemQuantity(item["Product ID"], newQuantity);
            return newQuantity;
        });
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                const newQuantity = prevQuantity - 1;
                updateItemQuantity(item["Product ID"], newQuantity);
                return newQuantity;
            }
            return prevQuantity;
        });
    };

    return (
        <div className="cart-item d-flex gap-1">
            <div className="image-div h-100">
                <img src={item["Product image"]} className="img-thumbnail" alt="Description" />
            </div>
            <div className="secondary-div h-100 d-flex flex-column justify-content-between py-2">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-6">{item["Product name"]}</span>
                    <button type="button" className="delete-btn d-flex justify-content-center align-items-center">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="input-group mb-3 h-100 w-50 d-flex">
                        <button
                            className="btn btn-outline-secondary h-100 w-25 d-flex justify-content-center align-items-center"
                            type="button"
                            onClick={decreaseQuantity}
                        >
                            <span className="material-symbols-outlined">remove</span>
                        </button>
                        <input
                            type="text"
                            className="form-control h-100 w-25 text-center"
                            value={quantity}
                            readOnly
                        />
                        <button
                            className="btn btn-outline-secondary h-100 w-25 d-flex justify-content-center align-items-center"
                            type="button"
                            onClick={increaseQuantity}
                        >
                            <span className="material-symbols-outlined">add</span>
                        </button>
                    </div>
                    <span className="border">{`Rs. ${quantity * item["Product price"]}`}</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
