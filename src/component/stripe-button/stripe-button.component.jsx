import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_1ohnW2oMfA9u9UtIljtsR87H00qGgaq2g8'

    const onToken = token => {
        console.log(token)
        alert('Payment Sucessfull')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN CLOTHING Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description= {`Your total i $${price}`}
            ammount = {priceForStripe}
            panelLabel='Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton