import {createSlice} from '@reduxjs/toolkit'

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

export default counterSlice