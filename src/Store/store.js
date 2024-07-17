import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './cart'
const store = configureStore({
    reducer:{
        Cart:CartSlice.reducer
    }
})
export default store