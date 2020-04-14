import SHOP_DATA from './shop.data.js';

const INTIAL_STATE ={
    collections: SHOP_DATA
}

const shopReducer = ( state =  INTIAL_STATE, actions)=>{
    switch(actions.type) {
        default:
            return state
    }
}
export default shopReducer