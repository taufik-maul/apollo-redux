const initState = {
    cart: [],
    cartCount: 0    
}


const cart = (state = initState, action) => {
    const cartCount = (state.cart.length)?state.cart.reduce((accum,item) => accum + item.qty, 0):0;
console.log(action.type)
    switch (action.type) {
        case "ADD_TO_CART":
            let updateCart = [...state.cart,action.item];
            if(state.cart.length) {
                const sameItem = state.cart.findIndex(item => item.id === action.item.id)
                    if(sameItem != -1) {
                        state.cart[sameItem].qty += action.item.qty;
                        updateCart = [...state.cart]
                    }
            }
            return {...state, cart: updateCart, cartCount: parseInt(cartCount) + parseInt(action.item.qty)}
            break;
        case "REMOVE_FROM_CART":
            console.log(action)
            return {...state}
            break;
        case "UPDATE_CART":
            console.log(action)
            return {...state}
            break;
        case "CLEAR_ALL":
            
            break;
    
        default: return state;
    }
}

export {cart};
