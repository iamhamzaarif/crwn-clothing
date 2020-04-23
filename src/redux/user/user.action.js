import UserActionTypes from './user.type'


export const googleSignInStart = () =>({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const signInSucess = user =>({
    type: UserActionTypes.SIGN_IN_SUCESS,
    payload: user
})

export const signInFailure = (error) =>({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = emailAndPassword =>({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const checkUserSession = () =>({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () =>({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSucess = () =>({
    type: UserActionTypes.SIGN_OUT_SUCESS
})

export const signOutFailure = (error) =>({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = (userCredential) =>({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredential
})

export const signUpSucess = ({user, additonalData}) =>({
    type: UserActionTypes.SIGN_UP_SUCESS,
    payload: {user, additonalData}
})

export const signUpFailure = (error) =>({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})
