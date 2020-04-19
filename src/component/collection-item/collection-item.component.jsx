import React from 'react';
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'
//import './collection-item.styles.scss';
import {PriceContainer, NameContainer, CollectionFooterContainer, CollectionItemContainer, AddButton, BackgroundImage} from './collection-item.styles'

const CollectionItem =({item, addItem})=>{
    const {name, price, imageUrl} = item 
return(
    <CollectionItemContainer className='collection-item'>
        <BackgroundImage className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}>

        </BackgroundImage>
        <CollectionFooterContainer className='collection-footer'>
                <NameContainer classsName='name'>{name}</NameContainer>
                <PriceContainer classsName='price'>{price}</PriceContainer>

        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item )} inverted>Add to Cart</AddButton>
        </CollectionItemContainer>

)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)