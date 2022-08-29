const LOAD_CARTITEMS = 'session/LOAD_CARTITEMS';
const UPDATE_CARTITEM = 'session/UPDATE_CARTITEM';

const loadItems = (cartItems) => ({
    type: LOAD_CARTITEMS,
    payload: cartItems
})

const updateItem = (cartItem) => ({
    type: UPDATE_CARTITEM,
    payload: cartItem
})

export const getCartItems = (cartId) => async (dispatch) => {
    const response = await fetch(`/api/carts/${cartId}/cartItems`)
    if(response.ok){
        const data = await response.json()
        dispatch(loadItems(data))
        return data
    } else if(response.status < 500){
        if(response.errors){
            const data = await response.json()
            return data
        }
    }
}

export const updateCartItem = (cartItemId, quantity) => async (dispatch) => {
    const response = await fetch(`/api/cartItems/${cartItemId}/edit`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            quantity
        })
    })
    if(response.ok){
        const data = await response.json();
        dispatch(updateItem(data))
        return data;
    } else if (response.status < 500){
        const data = await response.json()
        if(data.errors){
            return data.errors
        }
    }
}

const initialState = {}

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOAD_CARTITEMS: {
            const newState = {}
            action.payload.cartItems.forEach(item => {
                newState[item.id] = item
            })
            return newState
        }
        case UPDATE_CARTITEM: {
            const newState = { ...state }
            console.log(action.payload)
            newState[action.payload.id] = action.payload
            return newState
        }
        default:
            return state
    }
}
