import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../component/cart/cartSlice';
import productSlice from '../component/product/productSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
    },
})
export default store;