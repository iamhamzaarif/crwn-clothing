import { takeLatest, all, call, put } from 'redux-saga/effects'
import {clearCart} from './cart.action'
import UserActionTypes from '../user/user.type'

export function* clearCartOnSignOut(){

    yield put(clearCart())
}

export function* onSignOutSucess(){

    yield takeLatest(UserActionTypes.SIGN_OUT_SUCESS, clearCartOnSignOut)
}

export function* cartSaga(){
    yield  all([
      call(onSignOutSucess) 
      
    ])
  }
