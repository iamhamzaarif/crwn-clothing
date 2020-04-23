import {takeLatest, put, all, call} from 'redux-saga/effects'

import  {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utlis'

import {
  signInFailure, 
  signInSucess,
  signOutSucess,
  signOutFailure,
  signUpFailure,
  signUpSucess
} from './user.action'

import UserActionTypes from './user.type'

export function* getSnapshotFromUser(userAuth, additionalData){
  try{
  const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
  const userSnapshot = yield userRef.get()
  yield put(signInSucess({
      id: userSnapshot.id,
    ...userSnapshot.data()
  }))
}
catch(error){
  yield put(signInFailure(error))
}
}

export function* signInWithGoogle(){
try{
    const {user} = yield auth.signInWithPopup(googleProvider)
     yield getSnapshotFromUser(user)
}
catch(error){
    yield put(signInFailure(error))
}

    
}

export function* signInWithEmail( { payload: {email, password} } ){

  try{
      const {user} = yield auth.signInWithEmailAndPassword(email, password)
      yield getSnapshotFromUser(user)
} catch(error){
    yield  put(signInFailure(error)) 
  }
}

export function* onGoogleSignInStart(){

    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)

}

export function* isUserAuthenticated(){

  try{
      const userAuth = yield getCurrentUser()
      if (!userAuth) return
      yield getSnapshotFromUser(userAuth)

  }
  catch(error){
    yield put(signInFailure(error))

  }

}

export function* onCheckUserSession(){

  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onEmailSignInStart(){

  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
} 

export function* signOut(){
  try{
      yield auth.signOut()
      yield put(signOutSucess())
  }
  catch(error){
    yield(put(signOutFailure(error)))
  }
}

export function* onSignOutStart(){

  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
} 


export function* signUp({payload: {email,password,displayName}}){

  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      email,
      password
    )
      //yield createUserProfileDocument(user, { displayName });
      yield put(signUpSucess({user, additonalData:{displayName}}))
  }
    catch(error){
      yield put(signUpFailure())
    }
}

export function* onSignUpStart(){

  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* signInAfterSignUp({payload: {user, additonalData}}){

  yield getSnapshotFromUser(user, additonalData)
}

export function* onSignUpSucess(){
  yield takeLatest(UserActionTypes.SIGN_UP_SUCESS, signInAfterSignUp)
}

export function* userSaga(){
  yield  all([
    call(onGoogleSignInStart), 
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSucess)
  ])
}