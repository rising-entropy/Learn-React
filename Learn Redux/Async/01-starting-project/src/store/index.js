import {configureStore} from '@reduxjs/toolkit'
import UISlice from './uiSlice'

const store = configureStore({
    reducer: {ui: UISlice.reducer}
})


export const uiActions = UISlice.actions
export default store;