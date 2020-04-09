import CartActionType from './cart.type'

export const toggelCartHidden =()=>({
    type: CartActionType.TOGGEL_CART_HIDDEN
})
export const addItem = item =>({
    type: CartActionType.ADD_ITEM,
    payload: item
})