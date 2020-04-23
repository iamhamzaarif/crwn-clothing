
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import {connect} from 'react-redux'

import WithSpinner from '../with-spinner/with-spinner.component'
import {selectCollectionisFetching} from '../../redux/shop/shop.selector'
import CollectionOverview from './collection-overveiw.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionisFetching
})

const CollectionOverviewConatiner = compose(
    connect(mapStateToProps),
    WithSpinner)(CollectionOverview)


export default CollectionOverviewConatiner