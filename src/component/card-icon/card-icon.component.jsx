import React from 'react'

import { connect } from 'react-redux'

import {toggelCartHidden} from '../../redux/cart/cart.action'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import {selectCartItemsCount} from '../../redux/cart/cart.selector'

import './card-icon.styles.scss';

const CartIcon = ({toggelCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggelCartHidden}>
        <ShoppingIcon className= 'shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapDispatchtoProps = dispatch =>({
 toggelCartHidden: () => dispatch(toggelCartHidden())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(
    mapStateToProps, 
    mapDispatchtoProps)
    (CartIcon);