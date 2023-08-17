import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsStatus: 'idle',
}
export const fetchAsyncProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('http://localhost:8000/products')
    const result = await data.json();
    return result;
});
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncProducts.pending, (state, action) => {
                state.productsStatus = 'loading';
            })
            .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.productsStatus = 'idle'
            })
            .addCase(fetchAsyncProducts.rejected, (state, action) => {
                state.productsStatus = 'error'
            })
    }
});
export const getProducts = (state) => state.product.products;
export const getProductsStatus = (state) => state.product.productsStatus;
export default productSlice.reducer;

