import React from 'react';

import SignIn from '../../component/sign-in/sign-in.component'

import './sign-in-and-sign-up.styles.scss'
import '../../component/sign-up/sign-up.componenet'
import SignUp from '../../component/sign-up/sign-up.componenet';

const SignInAndSignUpPage = () => (

    <div className='sign-in-and-sign-up'>
        <SignIn/>
         <SignUp></SignUp>
    </div>
)

export default SignInAndSignUpPage;