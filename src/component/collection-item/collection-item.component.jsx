import React from 'react';
import CoustomButton from '../coustm-button/coustm-button.component'

import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'
import './collection-item.styles.scss';

const CollectionItem =({item, addItem})=>{
    const {name, price, imageUrl} = item 
return(
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}>

        </div>
        <div className='collection-footer'>
                <span classsName='name'>{name}</span>
                <span classsName='price'>{price}</span>

        </div>
        <CoustomButton onClick={() => addItem(item )} inverted>Add to Cart</CoustomButton>
        </div>

)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)