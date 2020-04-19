import React from 'react';
import {CustomButtonContainer} from './coustm-button.styles'

const CoustomButton =({children,...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)
export default CoustomButton;