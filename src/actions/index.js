// here you can write and export ACTION CREATORS
// an ACTION CREATOR is a FUNCTION returning an ACTION

export const addToCartAction = (job) => ({
  // we need to pass an action here
  type: 'ADD_TO_FAVORITES',
  payload: job,
})

export const removeFromCartAction = (index) => ({
  // we need to pass an action here
  type: 'REMOVE_FROM_FAVORITES',
  payload: index,
})
