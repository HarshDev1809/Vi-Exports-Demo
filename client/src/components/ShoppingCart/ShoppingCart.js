import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { updateCartItemQuantity } from '../../app/features/Cart/cartSlice';

function ShoppingCart() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const updateItemQuantity = (productId, newQuantity) => {
        dispatch(updateCartItemQuantity({ productId, newQuantity }));
    };

    return (
        <div className="shopping-cart">
            {items.map((item) => (
                <CartItem
                    key={item["Product ID"]}
                    item={item}
                    updateItemQuantity={updateItemQuantity}
                />
            ))}
        </div>
    );
}

export default ShoppingCart;
