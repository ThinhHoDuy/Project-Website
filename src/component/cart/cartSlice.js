import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const itemIdex = (state.cartItems || []).findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIdex >= 0) {
                state.cartItems[itemIdex].cartQuantity += 1;
            } else {
                const temProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(temProduct)
            }
        },
        remove(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        decreaseCart(state, action) {
            const itemIdex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if (itemIdex >= 0 && state.cartItems[itemIdex].cartQuantity > 1) {
                state.cartItems[itemIdex].cartQuantity -= 1
            }
        },
        increaseCart(state, action) {
            const itemIdex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if (itemIdex >= 0) {
                state.cartItems[itemIdex].cartQuantity += 1
            }
        },
        clearCart(state, action) {
            state.cartItems = [] 
        }
    }

});
export const { add, remove, decreaseCart, increaseCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;