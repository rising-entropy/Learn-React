import {createSlice} from '@reduxjs/toolkit'

const initialCartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItemToCart(state, action)
        {
            state.totalQuantity++
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            if(!existingItem)
            {
                state.items.push({id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title})
            }
            else
            {
                existingItem.quantity++
                existingItem.totalPrice += existingItem.price
            }

        },
        removeItemFromCart(state, action)
        {
            state.totalQuantity--
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            if(existingItem.quantity === 1)
            {
                state.items = state.items.filter(item => item.id !== id)
            }
            else
            {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        }
    }
})

export default cartSlice;