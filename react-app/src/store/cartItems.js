const LOAD_CARTITEMS = 'session/LOAD_CARTITEMS'

const loadItems = (cartItems) => ({
    type: LOAD_CARTITEMS,
    payload: cartItems
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

const initialState = {}

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOAD_CARTITEMS:
            const newState = {}
            action.payload.cartItems.forEach(item => {
                newState[item.id] = item
            })
            return newState
        default:
            return state
    }
}
