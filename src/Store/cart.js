import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {Cartshow:false}

const CartSlice = createSlice({
    name:'Cart',
    initialState:initialCartState,
    reducers:{
        toggle(state){
            state.Cartshow = !state.Cartshow
        }
    }
})
export const CartAction = CartSlice.actions

export default CartSlice