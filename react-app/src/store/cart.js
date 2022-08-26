const LOAD_CART = 'session/LOAD_CART'

const loadCart = (cartId) => ({
    type: LOAD_CART,
    payload: cartId
});

export const createCart = (userId) => async (dispatch) => {
    const cartId = await fetch('/api/carts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId
        })
    }).then(response => response.json())
    if(cartId){
        if(cartId.errors){
            return cartId.errors
        }
        dispatch(loadCart(cartId))
    }
}

export const checkoutCart = (cartId, userId) => async (dispatch) => {
        const response = await fetch(`/api/carts/${cartId}/checkout`, {
            method: 'PUT'
        })
        dispatch(createCart(userId))
}

const initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case  LOAD_CART:
        console.log(action.payload)
        return { cartId: action.payload }
      default:
        return state;
    }
  }
