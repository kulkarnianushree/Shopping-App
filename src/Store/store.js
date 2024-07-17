import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './cart'
import ProductSlice from './product'
const store = configureStore({
    reducer:{
        Cart:CartSlice.reducer,
        Product:ProductSlice.reducer
    }
})
export default store