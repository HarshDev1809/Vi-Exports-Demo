import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
const URL = process.env.REACT_APP_URL;


export const getCartItems = createAsyncThunk("cart/getItems", async () => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${URL}/cart/getItems`, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    return err;
  }
});

export const addCartItem = createAsyncThunk("cart/addItem", async (item) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.post(`${URL}/cart/addItem`, item, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    if (err.response) {
      console.error("Unauthorized access - redirecting to login");
      if(window.confirm('You are not authorized. Please log in to continue.')){
        window.location.href = '/signin';
      }
    } else {
      console.log(err);
      console.error("Error:", err.message);
      return { error: err.message };
    }
  }
});

const shoppingBagSlice = createSlice({
  name: "Shopping Bag",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateCartItemQuantity(state, action) {
      const { productId, newQuantity } = action.payload;
      const item = state.items.find((item) => item["Product ID"] === productId);
      if (item) {
        item["Quantity"] = newQuantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        console.log("Fetching posts pending...");
        state.status = "loading";
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log("Fetching posts fulfilled:", action.payload);
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.error("Fetching posts rejected:", action.payload);
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
  },
});

export const { addItem, updateCartItemQuantity } = shoppingBagSlice.actions;

export default shoppingBagSlice.reducer;
