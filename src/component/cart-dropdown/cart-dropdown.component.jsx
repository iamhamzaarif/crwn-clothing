import React from 'react';

import CoustomButton from '../coustm-button/coustm-button.component'

import './cart-dropdown.styles.scss'

const CartDropDown = ( ) =>
(
    <div className= 'cart-dropdown'>
        <div className='cart-items'/>
        <CoustomButton>GO TO CHECKOUT</CoustomButton>
    </div>
)

export default CartDropDown;