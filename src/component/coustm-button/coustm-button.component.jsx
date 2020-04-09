import React from 'react';

import './coustm-button.component.scss'
const CoustomButton =({children,isGoogleSignIn,inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
)
export default CoustomButton;