import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

// configureStore - used for when multiple slices are to be combined

const initialCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            //payload will be the default name
            state.counter += action.payload
        },
        toggle(state)
        {
            state.showCounter = !state.showCounter
        }
    }
})

const initialAuthState = {isAuthenticated: false}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state)
        {
            state.isAuthenticated = true
        },
        logout(state)
        {
            state.isAuthenticated = false
        }
    }
})


const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
})


export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store;

//NEVER NEVER MUTATE EXISTING STATE