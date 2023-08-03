import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from '../component/cart/cartSlice';
import productSlice from '../component/product/productSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    cart: cartSlice,
    product: productSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
   
})

export const persistor = persistStore(store);
// export const store = configureStore({
//     reducer: {
//         cart: cartSlice,
//         product: productSlice,
//     }
// })
