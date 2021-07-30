import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
import UISlice from './uiSlice'

const store = configureStore({
    reducer: {ui: UISlice.reducer, cart: cartSlice.reducer}
})

export const cartActions = cartSlice.actions
export const uiActions = UISlice.actions
export default store;