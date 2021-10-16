export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const addProduct = (payload) => {
    return {
        type: 'ADD_PRODUCT',
        payload: payload
    }
}

export const removeProduct = (payload) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: payload
    }
}
