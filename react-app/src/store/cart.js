const LOAD_CART = 'session/LOAD_CART'

const loadCart = (cart) => ({
    type: LOAD_CART,
    payload: cart
});

export const createCart = (userId) => async (dispatch) => {
    const response = fetch('/api/cart', {
        method: 'POST',
        body: {
            userId: userId
        }
    })
    if(response.ok){
        const data = await response.json()
        if(data.errors){
            return data.errors
        }
        dispatch(loadCart(data))
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case  LOAD_CART:
        return { cartId: action.payload }
      default:
        return state;
    }
  }
