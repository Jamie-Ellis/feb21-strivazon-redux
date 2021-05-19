// the reducer is a PURE FUNCTION
// with the same input, it will always emit the same output
// no side effects are allowed, like api calls, external calls
// a pure function is NEVER MUTATING ITS ARGUMENTS

import { initialState } from '../store'

// a reducer intercepts any action dispatched
// and with the current state and the action is going to compute the new state

// an action is a JS object with at least a "type" property

// {
//     type: 'ADD_TO_CART',
//     payload: ??? --> any extra information you want to pass along your action
// }

// {
//     type: 'INCREMENT'
// }

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default mainReducer
