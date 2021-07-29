import {createStore} from 'redux'

const counterReducer = (state={counter: 0, showCounter: true}, action) => {
    if(action.type === 'increment')
    {
        return {
            showCounter: state.showCounter,
            counter: state.counter +1
        }
    }
    if(action.type === 'decrement')
    {
        return {
            showCounter: state.showCounter,
            counter: state.counter -1
        }
    }
    if(action.type === 'increase')
    {
        return {
            showCounter: state.showCounter,
            counter: state.counter + action.amount
        }
    }
    if(action.type === 'toggle')
    {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state
}

const store = createStore(counterReducer)

export default store;


//NEVER NEVER MUTATE EXISTING STATE