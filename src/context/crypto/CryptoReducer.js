const cryptoReducer = (state, action) => {
  switch(action.type) {
    case 'GET_FEATURED':
      return {
        ...state,
        featured: action.payload,
        loading: false
      }
    case 'GET_SEARCHED':
      return {
        ...state,
        searched: action.payload,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default cryptoReducer