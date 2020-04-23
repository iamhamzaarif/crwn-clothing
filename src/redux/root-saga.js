import {all, call} from 'redux-saga/effects'

import {shopSaga}from './shop/shop.sagas'
import {cartSaga} from './cart/cart.sagas'
import {userSaga} from './user/user.sagas'

export default function* rootSaga(){
    yield all([
        call(shopSaga),
        call(userSaga),
        call(cartSaga)

    ])
}