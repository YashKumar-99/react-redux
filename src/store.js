import { configureStore } from "@reduxjs/toolkit";
import './Features/cart/cartSlice';
import CartReducer from './Features/cart/cartSlice'

export const store = configureStore({
    reducer:{
        
       cart: CartReducer,
    
    },
})


