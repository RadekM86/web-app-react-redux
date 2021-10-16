const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            let newArray
            if (state.length) {
                const find = state.find(x => x._id === action.payload)
                if (find) {
                    const filteredState = state.filter(x => x._id !== action.payload)
                    newArray = [...filteredState, {_id: action.payload, count: find.count + 1}]
                } else {
                    newArray = [...state, { _id: action.payload, count: 1}]
                }
            } else {
                newArray = [{_id: action.payload, count: 1}]
            }
            return newArray
        
        case 'REMOVE_PRODUCT': 
            let removeArray
            if (state.length) {
                const find = state.find(x => x._id === action.payload)
                if (find && find.count === 1) {
                    const filteredState = state.filter(x => x._id !== action.payload)
                    removeArray = [...filteredState]
                } else if (find) {
                    const filteredState = state.filter(x => x._id !== action.payload)
                    removeArray = [...filteredState, {_id: action.payload, count: find.count - 1}]
                } else {
                    removeArray = [...state]
                }
            } else {
                removeArray = []
            }
            return removeArray;
    
        default:
            return state
    }
}

export default productReducer;