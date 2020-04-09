import React from 'react'

import './cart-item.styles.scss'

const CardItem =({ item: {imageUrl, name, price,quantity}}) =>
(
    <div className='cart-item'>
        <img src={imageUrl} alt='item'></img>
        <div className='item detail'></div>
            <span className='name'>{name}</span>
            <span className='price'>
            {quantity} x ${price}
             </span>
    </div>
)
export default CardItem