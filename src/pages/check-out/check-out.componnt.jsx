import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectItemTotal } from '../../redux/cart/cart.selector'
import './check-out.styles.scss'
import CheckoutItems from '../../component/checkout-items/checkout-items.component';

import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems,total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => <CheckoutItems key={cartItem.id} cartItem={cartItem}/>)}

    <div className='total'>
            <span>TOTAL: ${total}</span>
    <div className='test-warning'>
        *Please use following test credit card for payment*
        <br/>
        4242 4242 4242 4242 - Exp: 10/20 - CVV: 123
    </div>
    </div>
    <StripeCheckoutButton price={total}/>
    </div>

)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectItemTotal
})
export default connect(mapStateToProps)(CheckoutPage);