const redux = require('redux')

// Concept of Redux:

// Central place to store states
// Can be accessed by components using Subscription
// Mutated using Reducer Function that have to be dispatched using actions.


//reducer function
const counterReducer = (state={counter: 0}, action) => {
    return {
        counter: state.counter + 1
    }
}

//creating store
const store = redux.createStore(counterReducer)

//subscribe
const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({type: 'increment'})