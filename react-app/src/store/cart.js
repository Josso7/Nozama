const LOAD_CART = 'session/LOAD_CART'

const loadCart = (cartId) => ({
    type: LOAD_CART,
    payload: cartId
});

export const createCart = (userId) => async (dispatch) => {
    const response = fetch('/api/carts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId
        })
    })
    if(response.ok){
        const cartId = await response.json()
        if(cartId.errors){
            return cartId.errors
        }
        dispatch(loadCart(cartId))
    }
}

const initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case  LOAD_CART:
        return { cartId: action.payload }
      default:
        return state;
    }
  }
