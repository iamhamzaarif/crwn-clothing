import React, {useEffect} from 'react';
import {connect} from 'react-redux' 
///import {createStructuredSelector} from 'reselect'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
//import {  selectCollectionisLoaded } from '../../redux/shop/shop.selector'
//import {CollectionPageConatiner } from '../../pages/collection/collection.container'
import {Route} from 'react-router-dom'
import CollectionPageConatiner from '../collection/collection.container'
import CollectionOverviewConatiner from '../../component/collection-overveiw/collection-overveiw.container'
//import CollectionOverview from '../../component/collection-overveiw/collection-overveiw.component'

//import WithSpinner from '../../component/with-spinner/with-spinner.component'

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
//const CollectionsPageWithSpinner = WithSpinner(CollectionPage)


const ShopPage = ({ fetchCollectionsStart, match }) => {
  
  useEffect(()=>{
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

 

      return(<div className='shop-page'>
        
        <Route exact path={`${match.path}`} component={CollectionOverviewConatiner} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageConatiner}/>
      </div>)
      }
      
  

  // const mapStateToProps = createStructuredSelector({
   
  //   isCollectionLoaded: selectCollectionisLoaded
  // })

  const mapDispatchToProps = dispatch =>({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
      })
export default connect(null, mapDispatchToProps)(ShopPage)