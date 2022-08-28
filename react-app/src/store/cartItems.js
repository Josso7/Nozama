const LOAD_CARTITEMS = 'session/LOAD_CARTITEMS'

const loadItems = (cartItems) => ({
    type: LOAD_CARTITEMS,
    payload: cartItems
})

export const getCartItems = () => async (dispatch) => {

}

const initialState = {}

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOAD_CARTITEMS:
            const newState = {}
            action.payload.products.forEach(item => {
                newState[item.id] = item
            })
            return newState
        default:
            return state
    }
}
