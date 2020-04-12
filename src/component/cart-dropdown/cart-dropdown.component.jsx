import React from 'react';

import { connect }  from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CartItem from '../cart-item/cart-item.component'
import {toggelCartHidden} from '../../redux/cart/cart.action'
import CoustomButton from '../coustm-button/coustm-button.component'
import { withRouter } from 'react-router-dom';

import {selectCartItems} from '../../redux/cart/cart.selector'
import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItems, history,dispatch} ) =>
(
    <div className= 'cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ?
                (cartItems.map(cartItem=> 
                    (<CartItem key={cartItem.id } item={cartItem}/> 
            ))): (
                <span className="empty-message">Your Cart is Empty</span>)}
        </div>
        <CoustomButton onClick = {()=>{ 
            history.push('/checkout')
            dispatch(toggelCartHidden()
            )}}>GO TO CHECKOUT</CoustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector
({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropDown));