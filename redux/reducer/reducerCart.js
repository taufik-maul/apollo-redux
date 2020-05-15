const initState = {
    cart: [] 
}


const cart = (state = initState, action) => {
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
            return {...state, cart: updateCart}
            break;
        case "REMOVE_FROM_CART":
            let newArr = state.cart.filter(function( obj ) {
                return obj.id !== action.id;
            });
            return {...state, cart: newArr}
            break;
        case "UPDATE_CART":
            console.log(action)
            updateCart = [...state.cart];
            if(state.cart.length) {
                const sameItem = state.cart.findIndex(item => item.id === action.id)
                    if(sameItem != -1) {
                        state.cart[sameItem].qty = parseInt(action.qty);
                    }
            }
            return {...state, cart: updateCart}
            break;
        case "CLEAR_ALL":
            
            break;
    
        default: return state;
    }
}

export {cart};
