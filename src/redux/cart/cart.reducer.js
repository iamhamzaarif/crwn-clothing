import CartActionType from './cart.type'

import {addItemToCart} from './cart.utlis'

const INITIAL_STATE = {
    hidden: true,
    cartItem: []
}



const cartReducer = (state= INITIAL_STATE, action) => 
{
    switch(action.type){
        case CartActionType.TOGGEL_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionType.ADD_ITEM:
            return{
                ...state,
                cartItem:addItemToCart(state.cartItem, action.payload)
            }

        default: 
        return state;

    }
}
export default cartReducer;