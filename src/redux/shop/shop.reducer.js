//import SHOP_DATA from './shop.data.js';

import ShopActionTypes from './shop.types'

const INTIAL_STATE ={
    collections: null
}

const shopReducer = ( state =  INTIAL_STATE, actions)=>{
    switch(actions.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections: actions.payload
            }
        default:
            return state
    }
}
export default shopReducer