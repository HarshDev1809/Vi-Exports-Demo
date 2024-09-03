import { configureStore } from "@reduxjs/toolkit";
import shoppingBagReducer from './features/ShoppingBag/ShoppingBagSlice'
import itemReducer from "./features/Items/ItemsSlice"

const store = configureStore({
    reducer : {
        shoppingBag : shoppingBagReducer,
        items : itemReducer,
    },
});

export default store