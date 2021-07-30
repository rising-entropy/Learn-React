import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import counterSlice from './counterSlice'

// configureStore - used for when multiple slices are to be combined

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
})


export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store;

//NEVER NEVER MUTATE EXISTING STATE