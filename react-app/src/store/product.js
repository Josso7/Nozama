import reducer from "./cart"

const LOAD_PRODUCTS = 'session/LOAD_PRODUCTS'
const ADD_PRODUCT = 'session/ADD_PRODUCT'

const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})

export const createProduct = (name, price, category, description, image0, image1, image2, image3, image4, image5) => async (dispatch) => {
    const response = await fetch('/api/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            price,
            category,
            description,
            image0,
            image1,
            image2,
            image3,
            image4,
            image5
        })
    })

    if(response.ok){
        const data = await response.json();
        dispatch(addProduct(data))
        return null;
    } else if (response.status < 500){
        const data = await response.json();
        if(data.errors){
            return data.errors;
        }
    } else {
        return { 'Error': 'An error occured. Please try again.'}
    }
}

const initialState = {}

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOAD_PRODUCTS:
                const newState = {}
                action.products.forEach(product => {
                    newState[product.id] = product
                })
            return newState
    }
}
