//import SHOP_DATA from './shop.data.js';

import ShopActionTypes from './shop.types'

const INTIAL_STATE ={
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = ( state =  INTIAL_STATE, actions)=>{
    switch(actions.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state, 
                isFetching: true
            }

        case ShopActionTypes.FETCH_COLLECTIONS_SUCESS:
            return{
                ...state,
                isFetching: false,
                collections: actions.payload
            }

        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
                return{
                    ...state,
                    isFetching: false,
                    errorMessage: actions.payload
                }
        default:
            return state
    }
}
export default shopReducer