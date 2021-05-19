// here you can write and export ACTION CREATORS
// an ACTION CREATOR is a FUNCTION returning an ACTION

export const addToCartAction = (book) => ({
  // we need to pass an action here
  type: 'ADD_TO_CART',
  payload: book,
})

export const removeFromCartAction = (index) => ({
  // we need to pass an action here
  type: 'REMOVE_FROM_CART',
  payload: index,
})

export const setUserNameAction = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
})
