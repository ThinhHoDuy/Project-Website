import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsStatus: 'idle',
    productSingle: [],
    productSingleStatus: 'idle'
}
export const fetchAsyncProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://dummyjson.com/products')
    const result = await data.json();
    return result.products;
});

export const fetchAsyncProductSingle = createAsyncThunk('product-single/get', async (id) => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
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
            .addCase(fetchAsyncProductSingle.pending, (state, action) => {
                state.productSingleStatus = 'loading';
            })
            .addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
                state.productSingle = action.payload;
                state.productSingleStatus = 'idle'
            })
            .addCase(fetchAsyncProductSingle.rejected, (state, action) => {
                state.productSingleStatus = 'error'
            })

    }
});
export const getProducts = (state) => state.product.products;
export const getProductSingle = (state) => state.product.productSingle;
export const getProductsStatus = (state) => state.product.productsStatus;
export const getProductSingleStatus = (state) => state.product.productSingleStatus;
export default productSlice.reducer;

