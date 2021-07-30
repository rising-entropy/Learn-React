import {createSlice} from '@reduxjs/toolkit'

const initialUIState = {toggleCart: false}

const UISlice = createSlice({
    name: 'UISlice',
    initialState: initialUIState,
    reducers: {
        toggleCart(state)
        {
            state.toggleCart = !state.toggleCart
        }
    }
})

export default UISlice;