import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectItemTotal } from '../../redux/cart/cart.selector'
import './check-out.styles.scss'
import CheckoutItems from '../../component/checkout-items/checkout-items.component';

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
    </div>
    </div>

)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectItemTotal
})
export default connect(mapStateToProps)(CheckoutPage);