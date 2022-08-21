import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import cartItems from '../../cartItems';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';


//first we have action type
//second callback function
//lifecycle actions

//using fetch api
// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//     return fetch(url)
//         .then((response) => response.json())
//         .catch((err) => console.log(err))
// })

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}


export const getCartItems = createAsyncThunk('cart/getCartItems'

    , async (thunkAPI) => {
        try {
            const response = await axios(url);
            // console.log(response)

            return response.data;
        } catch {
            return thunkAPI.rejectWithValue('something went wrong');
        }

    }

)


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        RemoveItem: (state, actions) => {
            console.log(state, actions)
            const Itemid = actions.payload;
            console.log(Itemid)
            const filteredcard = state.cartItems.filter((item) => item.id !== Itemid);
            console.log(filteredcard)
            state.cartItems = filteredcard;
        },
        Increase: (state, actions) => {
            const ItemId = actions.payload;
            //  console.log(ItemId)
            const findidObj = state.cartItems.find((item) => item.id === ItemId);
            //  console.log(findidObj)     
            findidObj.amount = findidObj.amount + 1;

        },
        decrese: (state, actions) => {

            const ItemId = actions.payload;
            const findidObj = state.cartItems.find((item) => item.id === ItemId);

            // if(findidObj.amount<=1){
            //     const filteredcard = state.cartItems.filter((item) => item.id !== ItemId);
            //     state.cartItems = filteredcard;
            // }else {
            //     findidObj.amount = findidObj.amount - 1;
            // }
            findidObj.amount = findidObj.amount - 1;
        },
        calculateTotals: (state) => {

            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount = amount + item.amount;
                total = total + (item.price * item.amount);
            })
            state.amount = amount;
            state.total = total;
        }

    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state, action) => {
            // console.log(action);
            state.isLoading = false;
        },
    }


    // extraReducers: {
    //     [getCartItems.pending]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [getCartItems.fulfilled]: (state, action) => {
    //         // console.log(action);
    //         state.isLoading = false;
    //         state.cartItems = action.payload;
    //     },
    //     [getCartItems.rejected]: (state, action) => {
    //         // console.log(action);
    //         state.isLoading = false;
    //     },
    // }
})

export default cartSlice.reducer;

export const { clearCart, RemoveItem, Increase, decrese, calculateTotals } = cartSlice.actions;

// console.log(cartSlice)