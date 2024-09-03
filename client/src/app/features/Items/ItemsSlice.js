import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const getItems = createAsyncThunk("item/getItems",async()=>{
    try{
        const response = await axios.get(`${URL}/products`);
        console.log(response);
        return response.data;
    }catch(err){
        return err;
    }
})

export const getProductById = createAsyncThunk("item/getProductById", async (id, { rejectWithValue }) => {
    try {
        console.log(id)
        const response = await axios.get(`${URL}/products/${id}`);
        console.log(response)
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});

const itemSlice = createSlice({
    name: "items",
    initialState : {
        items: [],
        status : "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getItems.pending, (state)=>{
            console.log("Fetching posts pending...");
            state.status = "loading";
        })
        .addCase(getItems.fulfilled, (state,action)=>{
            console.log("Fetching posts fulfilled:", action.payload);
            state.status = "succeeded";
            state.items = action.payload;
        })
        .addCase(getItems.rejected,(state,action)=>{
            console.error("Fetching posts rejected:", action.payload);
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(getProductById.pending, (state) => {
            console.log("Fetching product by ID pending...");
            state.status = "loading";
        })
        .addCase(getProductById.fulfilled, (state, action) => {
            console.log("Fetching product by ID fulfilled:", action.payload);
            state.status = "succeeded";
            state.selectedItem = action.payload;  // Store the fetched product in selectedItem
        })
        .addCase(getProductById.rejected, (state, action) => {
            console.error("Fetching product by ID rejected:", action.payload);
            state.status = "failed";
            state.error = action.error.message;
        });
    }
})

export default itemSlice.reducer;