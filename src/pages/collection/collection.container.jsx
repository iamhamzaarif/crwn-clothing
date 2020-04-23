import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import {connect} from 'react-redux'

import WithSpinner from '../../component/with-spinner/with-spinner.component'
import {selectCollectionisLoaded} from '../../redux/shop/shop.selector'
import CollectionPage from '../collection/collection.component'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionisLoaded(state)
})

const CollectionPageConatiner = compose(
    connect(mapStateToProps),
    WithSpinner)(CollectionPage)


export default CollectionPageConatiner