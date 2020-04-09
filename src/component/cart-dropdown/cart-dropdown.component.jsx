import React from 'react';

import { connect }  from 'react-redux'
import CartItem from '../cart-item/cart-item.component'

import CoustomButton from '../coustm-button/coustm-button.component'

import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItem} ) =>
(
    <div className= 'cart-dropdown'>
        <div className='cart-items'>
            {
                cartItem.map(cartItem=> (<CartItem key={cartItem.id } item={cartItem}/> 
            ))}
        </div>
        <CoustomButton>GO TO CHECKOUT</CoustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItem}}) =>
({
    cartItem
})
export default connect(mapStateToProps)(CartDropDown);