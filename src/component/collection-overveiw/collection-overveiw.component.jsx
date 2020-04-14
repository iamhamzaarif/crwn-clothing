import React from 'react'
import CollectionPreview from '../preveiw-collection/Collection-preveiw.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'


import './collection-overveiw.styles.scss'

const CollectionOverview = ({collections}) => {
  return(  <div className='collection-pverview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}

    </div>)
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
  })

  export default connect(mapStateToProps)(CollectionOverview);