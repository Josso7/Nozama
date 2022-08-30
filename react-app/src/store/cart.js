const LOAD_CART = 'session/LOAD_CART'

const loadCart = (cart) => ({
    type: LOAD_CART,
    payload: cart
});

export const createCart = (userId) => async (dispatch) => {
    const response = await fetch('/api/carts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId
        })
    })
    if(response.ok){
        const data = await response.json()
        dispatch(loadCart(data))
    } else if (response.status < 500){
        const data = await response.json()
        if(data.errors){
            return data
        }
    }
}

export const getCart = (userId) => async (dispatch) => {
    const response = await fetch('/api/carts')
    if(response.ok){
        const data = await response.json()
        dispatch(loadCart(data))
        return data
    } else if (response.status < 500){
        const data = await response.json()
        if(data.errors){
            return data
        }
    }
}

export const checkoutCart = (cartId, userId) => async (dispatch) => {
    const response = await fetch(`/api/carts/${cartId}/checkout`, {
        method: 'PUT'
    })
    dispatch(createCart(userId))
    if(response.ok){
        const data = await response.json();
        return data
    } else if (response.status < 500){
        const data = await response.json();
        if(data.errors){
            return data
        }
    }
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
