const LOAD_PRODUCTS = 'session/LOAD_PRODUCTS'
const ADD_PRODUCT = 'session/ADD_PRODUCT'

const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})

const loadAllProducts = (products) => ({
    type: LOAD_PRODUCTS,
    payload: products
})

export const getAllProducts = () => async (dispatch) => {
    const response = await fetch('/api/products/')

    if(response.ok){
        const data = await response.json();
        dispatch(loadAllProducts(data))
        return data
    } else if (response.status < 500){
        const data = await response.json()
        if(data.errors){
            return data.errors
        }
    }
}

export const editProduct = (productId, name, price, category, description, image0, image1, image2, image3, image4, image5) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/edit`, {
        method: 'PUT',
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
        const data = response.json();
        return data
    } else if(response.status < 500){
        if(response.errors){
        const data = response.json();
        return data
        }
    }
}

export const deleteProduct = (productId)  => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/delete`, {
        method: 'DELETE'
    })
    if(response.ok){
        const data = response.json()
    } else if(response.status < 500){
        const data = response.json()
        if(data.errors){
            return data.errors
        }
    }
}

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
                console.log(action.payload)
                const newState = {}
                action.payload.products.forEach(product => {
                    newState[product.id] = product
                })
            return newState;
        default:
            return state;
    }
}
