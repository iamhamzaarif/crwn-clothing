import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrappedCompnenet => {
    const Spinner = ({isLoading , ...otherProps}) =>{
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ):
    (
        <WrappedCompnenet {...otherProps}/>
    )}
    return Spinner
}
export default WithSpinner;